// src/composants/Timer.jsx

import React, { useEffect } from "react";
import '../helpers';

function Timer({ id, title, project, elapsed, runningSince, color, shadowColor, onEditFormOpen, onDelete, onPlay, onPause }) {
    
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    useEffect(() => {
        const interval = setInterval(() => forceUpdate(), 50);
        return () => clearInterval(interval);
    }, [forceUpdate]);

    const handlePlay = () => onPlay(id);
    const handlePause = () => onPause(id);

    const elapsedString = window.helpers.renderElapsedString(elapsed, runningSince);

    const renderButton = () => {
        if (runningSince) {
            // On enlève la classe "red" ! Le bouton héritera de la couleur du timer.
            return <button onClick={handlePause} className='button'>Pause</button>;
        } else {
            return <button onClick={handlePlay} className='button'>Play</button>;
        }
    };

    // On ajoute dynamiquement la classe 'is-running' si le timer tourne
    const timerBoxClasses = `timer--box ${runningSince ? 'is-running' : ''}`;

    return (
        <div
            className={timerBoxClasses}
            style={{
                '--timer-neon-color': color,
                '--timer-shadow-color': shadowColor
            }}
        >
            <div className='timer--content'>
                <div className='timer--header'>
                    <h2>{title}</h2>
                </div>
                <div className='timer--meta'>
                    <p>{project}</p>
                </div>
                <div className='timer--h2'>
                    <h4>{elapsedString}</h4>
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