import React, { useState, useEffect, useRef } from "react";
import '../helpers';

const millisecondsToHuman = (ms) => {
    if (ms < 0) ms = 0;
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);
    const pad = (n) => n.toString().padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

function Timer({ id, type, title, project, elapsed, runningSince, duration, remaining, color, shadowColor, onEditFormOpen, onDelete, onPlay, onPause }) {
    
    const [currentTime, setCurrentTime] = useState(Date.now());
    const audioRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(Date.now()), 50);
        return () => clearInterval(interval);
    }, []);

    let elapsedString;
    let progress = 0;
    let isFinished = false;

    if (type === 'minuteur') {
        let currentRemaining = remaining;
        if (runningSince) {
            currentRemaining = remaining - (currentTime - runningSince);
        }
        if (currentRemaining <= 0) {
            isFinished = true;
            currentRemaining = 0;
        }
        elapsedString = millisecondsToHuman(currentRemaining);
        progress = (1 - (currentRemaining / duration)) * 100;
    } else {
        elapsedString = window.helpers.renderElapsedString(elapsed, runningSince);
    }

    useEffect(() => {
        if (isFinished) {
            audioRef.current.play();
        }
    }, [isFinished]);

    const renderButton = () => {
        const isRunning = !!runningSince;
        if (isFinished) {
            return <button className='button' disabled>Terminé !</button>;
        }
        if (isRunning) {
            return <button onClick={() => onPause(id)} className='button'>Pause</button>;
        } else {
            return <button onClick={() => onPlay(id)} className='button'>Play</button>;
        }
    };

    const timerBoxClasses = `timer--box ${runningSince ? 'is-running' : ''}`;

    return (
        <div
            className={timerBoxClasses}
            style={{
                '--timer-neon-color': color,
                '--timer-shadow-color': shadowColor
            }}
        >
            <audio ref={audioRef} src="alarm.mp3" preload="auto" />

            {type === 'minuteur' && (
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
            )}
            
            <div className='timer--content'>
                <div className='timer--header'>
                    <h2>{title}</h2>
                </div>
                <div className='timer--meta'>
                    <p>{project}</p>
                    <span className="timer-type">
                            {type === 'minuteur' ? 'Minuteur' : 'Chronomètre'}
                    </span>
                </div>
                <div className='timer--h2'>
                    <h4>{isFinished ? "Terminé !" : elapsedString}</h4>
                </div>
                <div className='actions'>
                    <span onClick={() => onDelete(id)} className='trash'>Supprimer</span>
                    <span onClick={onEditFormOpen} className='edit'>Modifier</span>
                </div>
            </div>
            {renderButton()}
        </div>
    );
}

export default Timer;