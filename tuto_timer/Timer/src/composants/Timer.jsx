import React, { useState, useEffect, useRef } from "react";
import { useTheme } from '../context/ThemeContext';
import { db } from "../firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import '../helpers';

const millisecondsToHuman = (ms) => {
    if (ms < 0) ms = 0;
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);
    const pad = (n) => n.toString().padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

function Timer({ id, type, title, project, elapsed, runningSince, duration, remaining, onEditFormOpen, onDelete, onPlay, onPause, onAddTime, currentPhaseIndex, index }) {
    
    const { theme } = useTheme();
    const [currentTime, setCurrentTime] = useState(Date.now());
    const audioRef = useRef(null);
    const [phases, setPhases] = useState([]);

    useEffect(() => {
        if (type !== 'pomodoro') return;
        const phasesRef = collection(db, 'timers', id, 'phases');
        const q = query(phasesRef, orderBy('order'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const phasesData = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
            setPhases(phasesData);
        });
        return () => unsubscribe();
    }, [id, type]);

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(Date.now()), 50);
        return () => clearInterval(interval);
    }, []);

    let elapsedString, progress = 0, isFinished = false, currentPhaseName = "";
    const isRunning = !!runningSince;

    if (type === 'pomodoro') {
        const currentPhase = phases[currentPhaseIndex || 0];
        if (currentPhase) {
            currentPhaseName = currentPhase.name;
            let currentRemaining = remaining || 0;
            if (isRunning) {
                currentRemaining = remaining - (currentTime - runningSince);
            }
            if (currentRemaining <= 0 && isRunning) {
                isFinished = true;
                currentRemaining = 0;
            }
            elapsedString = millisecondsToHuman(currentRemaining);
            progress = (1 - (currentRemaining / currentPhase.duration)) * 100;
        } else {
            elapsedString = (currentPhaseIndex > 0 && currentPhaseIndex >= phases.length) ? "Terminé !" : "00:00:00";
            progress = (currentPhaseIndex > 0 && currentPhaseIndex >= phases.length) ? 100 : 0;
        }
    } else if (type === 'minuteur') {
        let currentRemaining = remaining;
        if (isRunning) { currentRemaining = remaining - (currentTime - runningSince); }
        if (currentRemaining <= 0 && isRunning) { isFinished = true; currentRemaining = 0; }
        elapsedString = millisecondsToHuman(currentRemaining);
        progress = (1 - (currentRemaining / duration)) * 100;
    } else {
        elapsedString = window.helpers.renderElapsedString(elapsed, runningSince);
    }
    
    useEffect(() => {
        if (isFinished) {
            if (audioRef.current) {
                audioRef.current.play();
            }
            onPause(id, true);
        }
    }, [isFinished, id, onPause]);
    
    let styleProps = {};
    if (theme.useDynamicColors && theme.dynamicPalette?.length > 0) {
        const palette = theme.dynamicPalette;
        const colorPalette = palette[index % palette.length];
        styleProps = {
            '--timer-neon-color': colorPalette.base,
            '--timer-shadow-color': colorPalette.shadow,
        };
    }

    const renderButton = () => {
        if (type === 'pomodoro' && phases.length > 0 && currentPhaseIndex >= phases.length) {
            return <button className='button' disabled>Session Terminée</button>;
        }
        if (isRunning) return <button onClick={() => onPause(id)} className='button'>Pause</button>;
        return <button onClick={() => onPlay(id)} className='button'>Play</button>;
    };

    const timerBoxClasses = `timer--box ${isRunning ? 'is-running' : ''}`;

    return (
        <div className={timerBoxClasses} style={styleProps}>
            <audio ref={audioRef} src={theme.sounds.alarm} preload="auto" />
            {(type === 'minuteur' || type === 'pomodoro') && (
                <div className="progress-bar-container"><div className="progress-bar" style={{ width: `${progress}%` }}></div></div>
            )}
            <div className='timer--content'>
                <div className='timer--header'>
                    <h2>{title}</h2>
                    {type === 'pomodoro' && phases.length > 0 && <span className="phase-info">{currentPhaseName} ({Math.min((currentPhaseIndex || 0) + 1, phases.length)}/{phases.length})</span>}
                </div>
                <div className='timer--meta'>
                    <p>{project}<span className="timer-type">{type === 'pomodoro' ? 'Pomodoro' : (type === 'minuteur' ? 'Minuteur' : 'Chronomètre')}</span></p>
                </div>
                <div className='timer--h2'><h4>{elapsedString}</h4></div>
                <div className='actions'>
                    <span onClick={() => onDelete(id)} className='trash'>Supprimer</span>
                    <span onClick={onEditFormOpen} className='edit'>Modifier</span>
                    {isRunning && type === 'pomodoro' && <span onClick={() => onAddTime(id)} className='add-time'>+5 min</span>}
                </div>
            </div>
            {renderButton()}
        </div>
    );
}

export default Timer;