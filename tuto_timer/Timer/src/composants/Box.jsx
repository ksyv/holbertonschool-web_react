// src/composants/Box.jsx

import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { 
    collection, 
    query, 
    where, 
    onSnapshot, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    doc 
} from "firebase/firestore";

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

    // --- LECTURE DES DONNÉES EN TEMPS RÉEL ---
    useEffect(() => {
        if (!currentUser) {
            setTimers([]);
            return;
        }

        // 1. On crée une requête : "donne-moi tous les timers de la collection 'timers'..."
        const timersCollectionRef = collection(db, 'timers');
        // 2. "...OÙ le champ 'userId' est égal à l'ID de mon utilisateur actuel."
        const q = query(timersCollectionRef, where("userId", "==", currentUser.uid));

        // 3. onSnapshot écoute les changements sur cette requête en temps réel.
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const timersFromDb = [];
            querySnapshot.forEach((doc) => {
                // On ajoute l'ID du document aux données du timer
                timersFromDb.push({ ...doc.data(), id: doc.id });
            });
            setTimers(timersFromDb);
        });

        // 4. On se désabonne de l'écouteur quand le composant est démonté.
        return () => unsubscribe();

    }, [currentUser]); // Cet effet se relance si l'utilisateur change.

    
    // --- ÉCRITURE ET MODIFICATION DES DONNÉES ---

    const handleCreateTimer = async ({ title, project }) => {
        const nextPalette = NEON_PALETTES[timers.length % NEON_PALETTES.length];
        const newTimer = {
            title,
            project,
            elapsed: 0,
            runningSince: null,
            color: nextPalette.base,
            shadowColor: nextPalette.shadow,
            userId: currentUser.uid, // On ajoute l'ID de l'utilisateur
        };
        // On ajoute le nouveau timer à la collection Firestore
        await addDoc(collection(db, 'timers'), newTimer);
    };

    const handleEditTimer = async ({ id, title, project }) => {
        const timerDocRef = doc(db, 'timers', id);
        await updateDoc(timerDocRef, { title, project });
    };

    const handleDeleteTimer = async (id) => {
        const timerDocRef = doc(db, 'timers', id);
        await deleteDoc(timerDocRef);
    };

    const handlePlay = async (id) => {
        const timerDocRef = doc(db, 'timers', id);
        await updateDoc(timerDocRef, { runningSince: Date.now() });
    };

    const handlePause = async (id) => {
        // On doit trouver le timer dans notre état local pour calculer le temps écoulé
        const timerToPause = timers.find(timer => timer.id === id);
        if (timerToPause) {
            const now = Date.now();
            const lastElapsed = now - timerToPause.runningSince;
            const newTotalElapsed = timerToPause.elapsed + lastElapsed;

            const timerDocRef = doc(db, 'timers', id);
            await updateDoc(timerDocRef, {
                runningSince: null,
                elapsed: newTotalElapsed,
            });
        }
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