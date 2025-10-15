// src/composants/Timer.jsx

import React, { useEffect } from "react";
import '../helpers';

function Timer({ id, title, project, elapsed, runningSince, color, shadowColor, onEditFormOpen, onDelete, onPlay, onPause }) {
    
    // Petite astuce pour forcer la mise à jour du composant toutes les 50ms
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    useEffect(() => {
        const interval = setInterval(() => {
            forceUpdate();
        }, 50);

        // Cette fonction de "nettoyage" est cruciale.
        // Elle s'exécute quand le composant est retiré de l'écran (démonté).
        return () => clearInterval(interval);
    }, []); // Le tableau vide [] signifie : "n'exécute cet effet qu'une seule fois, au montage"

    const handlePlay = () => onPlay(id);
    const handlePause = () => onPause(id);

    const elapsedString = window.helpers.renderElapsedString(elapsed, runningSince);

    const renderButton = () => {
        if (runningSince) {
            return <button onClick={handlePause} className='button red'>Pause</button>;
        } else {
            return <button onClick={handlePlay} className='button'>Play</button>;
        }
    };

    return (
        <div
            className='timer--box'
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