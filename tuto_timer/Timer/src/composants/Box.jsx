import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { collection, query, where, onSnapshot, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
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
        let newTimerData;
        if (type === 'minuteur') {
            newTimerData = { type: 'minuteur', title, project, duration: data.duration, remaining: data.duration, runningSince: null };
        } else {
            newTimerData = { type: 'chrono', title, project, elapsed: 0, runningSince: null };
        }
        await addDoc(collection(db, 'timers'), { ...newTimerData, color: nextPalette.base, shadowColor: nextPalette.shadow, userId: currentUser.uid });
    };

    const handleEditTimer = async (data) => {
        const { id, title, project, type, duration } = data;
        const timerDocRef = doc(db, 'timers', id);
        
        let updates = { title, project };

        if (type === 'minuteur') {
            updates.duration = duration;
            updates.remaining = duration;
            updates.runningSince = null;
        } else {
            updates.elapsed = duration;
            updates.runningSince = null;
        }

        await updateDoc(timerDocRef, updates);
    };

    const handleDeleteTimer = async (id) => {
        await deleteDoc(doc(db, 'timers', id));
    };

    const handlePlay = async (id) => {
        const timer = timers.find(t => t.id === id);
        if (!timer) return;
        if (timer.type === 'minuteur' && timer.remaining <= 0) return;
        await updateDoc(doc(db, 'timers', id), { runningSince: Date.now() });
    };

    const handlePause = async (id) => {
        const timer = timers.find(t => t.id === id);
        if (!timer || !timer.runningSince) return;
        const now = Date.now();
        const lastInterval = now - timer.runningSince;
        let updates = {};
        if (timer.type === 'minuteur') {
            const newRemaining = Math.max(0, timer.remaining - lastInterval);
            updates = { remaining: newRemaining, runningSince: null };
        } else {
            const newElapsed = timer.elapsed + lastInterval;
            updates = { elapsed: newElapsed, runningSince: null };
        }
        await updateDoc(doc(db, 'timers', id), updates);
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
                />
                <ActionContainer onFormSubmit={handleCreateTimer} />
            </div>
        </div>
    );
}

export default Box;