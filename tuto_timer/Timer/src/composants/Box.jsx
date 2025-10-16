import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { collection, query, where, onSnapshot, addDoc, updateDoc, deleteDoc, doc, writeBatch, getDocs } from "firebase/firestore";
import ListContainer from "./ListContainer";
import ActionContainer from "./ActionContainer";

const NEON_PALETTES = [
    { base: '#00ffff', shadow: '#00bfff' },
    { base: '#39ff14', shadow: '#ccff33' },
    { base: '#ffff00', shadow: '#ff9900' },
    { base: '#ff00ff', shadow: '#e600e6' },
    { base: '#ff6600', shadow: '#ff3300' },
];

function Box() {
    const [timers, setTimers] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        if (!currentUser) { setTimers([]); return; }
        const q = query(collection(db, 'timers'), where("userId", "==", currentUser.uid));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const timersFromDb = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setTimers(timersFromDb);
        });
        return () => unsubscribe();
    }, [currentUser]);

    const handleCreateTimer = async (data) => {
        const { title, project, type } = data;
        const nextPalette = NEON_PALETTES[timers.length % NEON_PALETTES.length];
        const commonData = { title, project, type, color: nextPalette.base, shadowColor: nextPalette.shadow, userId: currentUser.uid };

        if (type === 'pomodoro') {
            const pomodoroRef = await addDoc(collection(db, 'timers'), { ...commonData, currentPhaseIndex: 0, runningSince: null, remaining: 0 });
            const batch = writeBatch(db);
            data.phases.forEach((phase, index) => {
                const phaseRef = doc(collection(db, 'timers', pomodoroRef.id, 'phases'));
                batch.set(phaseRef, { ...phase, order: index });
            });
            await batch.commit();
        } else {
            let newTimerData = type === 'minuteur'
                ? { ...commonData, duration: data.duration, remaining: data.duration, runningSince: null }
                : { ...commonData, elapsed: 0, runningSince: null };
            await addDoc(collection(db, 'timers'), newTimerData);
        }
    };

    const handleEditTimer = async (data) => {
        const { id, title, project, type } = data;
        const timerDocRef = doc(db, 'timers', id);
        
        if (type === 'pomodoro') {
            const batch = writeBatch(db);
            batch.update(timerDocRef, { title, project, runningSince: null, currentPhaseIndex: 0, remaining: 0 });
            
            const phasesRef = collection(db, 'timers', id, 'phases');
            const oldPhasesSnap = await getDocs(phasesRef);
            oldPhasesSnap.forEach(doc => batch.delete(doc.ref));
            
            data.phases.forEach((phase, index) => {
                const newPhaseRef = doc(collection(db, 'timers', id, 'phases'));
                batch.set(newPhaseRef, { ...phase, order: index });
            });
            await batch.commit();
        } else {
            let updates = { title, project, runningSince: null };
            const { duration } = data;
            if (type === 'minuteur') {
                updates.duration = duration;
                updates.remaining = duration;
            } else { // chrono
                updates.elapsed = duration;
            }
            await updateDoc(timerDocRef, updates);
        }
    };

    const handleDeleteTimer = async (id) => {
        const timer = timers.find(t => t.id === id);
        if (timer.type === 'pomodoro') {
            const phasesRef = collection(db, 'timers', id, 'phases');
            const phasesSnapshot = await getDocs(phasesRef);
            const batch = writeBatch(db);
            phasesSnapshot.forEach(doc => batch.delete(doc.ref));
            await batch.commit();
        }
        await deleteDoc(doc(db, 'timers', id));
    };

    const handlePlay = async (id) => {
        const timer = timers.find(t => t.id === id);
        if (!timer) return;

        let updates = { runningSince: Date.now() };

        if (timer.type === 'pomodoro' && !timer.runningSince) {
            const currentPhaseIndex = timer.currentPhaseIndex || 0;
            const phasesRef = collection(db, 'timers', id, 'phases');
            // Gérer le cas où on a fini la session et on appuie sur play (recommencer)
            const isFinished = currentPhaseIndex >= (await getDocs(phasesRef)).size;
            const targetIndex = isFinished ? 0 : currentPhaseIndex;
            
            if (isFinished) {
                updates.currentPhaseIndex = 0;
            }

            const q = query(phasesRef, where('order', '==', targetIndex));
            const phaseSnapshot = await getDocs(q);
            
            if (!phaseSnapshot.empty) {
                const phaseData = phaseSnapshot.docs[0].data();
                // Si on relance une phase en pause, on utilise le temps restant. Sinon, on prend la durée totale de la phase.
                updates.remaining = (timer.remaining > 0 && !isFinished) ? timer.remaining : phaseData.duration;
            }
        }
        
        await updateDoc(doc(db, 'timers', id), updates);
    };

    const handlePause = async (id, isCycleEnd = false) => {
        const timer = timers.find(t => t.id === id);
        if (!timer) return;
        
        let updates = { runningSince: null };
        
        if (timer.runningSince) {
            const lastInterval = Date.now() - timer.runningSince;
            if (timer.type === 'minuteur' || timer.type === 'pomodoro') {
                updates.remaining = Math.max(0, timer.remaining - lastInterval);
            } else if (timer.type === 'chrono') {
                updates.elapsed = timer.elapsed + lastInterval;
            }
        }
        
        if (isCycleEnd && timer.type === 'pomodoro') {
            const nextPhaseIndex = (timer.currentPhaseIndex || 0) + 1;
            const phasesRef = collection(db, 'timers', id, 'phases');
            const q = query(phasesRef, where('order', '==', nextPhaseIndex));
            const nextPhaseSnapshot = await getDocs(q);

            if (!nextPhaseSnapshot.empty) {
                const nextPhase = nextPhaseSnapshot.docs[0].data();
                updates.currentPhaseIndex = nextPhaseIndex;
                updates.remaining = nextPhase.duration;
                updates.runningSince = Date.now();
            } else {
                updates.currentPhaseIndex = nextPhaseIndex;
                updates.remaining = 0;
            }
        }

        await updateDoc(doc(db, 'timers', id), updates);
    };
    
    const handleAddTime = async (id) => {
        const timer = timers.find(t => t.id === id);
        if (!timer || timer.type !== 'pomodoro') return;

        const timeToAdd = 5 * 60 * 1000;
        let newRemaining;

        if (timer.runningSince) {
            const lastInterval = Date.now() - timer.runningSince;
            newRemaining = (timer.remaining - lastInterval) + timeToAdd;
        } else {
            newRemaining = (timer.remaining || 0) + timeToAdd;
        }

        await updateDoc(doc(db, 'timers', id), {
            remaining: newRemaining,
            runningSince: timer.runningSince ? Date.now() : null
        });
    };

    return (
        <div className='boxed--view'>
            <div className='boxed--view__box'>
                <ListContainer
                    timers={timers}
                    onFormSubmit={handleEditTimer}
                    onDelete={handleDeleteTimer}
                    onPlay={handlePlay}
                    onPause={handlePause}
                    onAddTime={handleAddTime}
                />
                <ActionContainer onFormSubmit={handleCreateTimer} />
            </div>
        </div>
    );
}

export default Box;