// src/composants/Box.jsx

import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
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

    const handleCreateTimer = ({ title, project }) => {
        const nextPalette = NEON_PALETTES[timers.length % NEON_PALETTES.length];
        const newTimer = {
            title,
            project,
            id: uuidv4(),
            elapsed: 0,
            runningSince: null,
            color: nextPalette.base,
            shadowColor: nextPalette.shadow,
        };
        setTimers([...timers, newTimer]);
    };

    const handleEditTimer = ({ id, title, project }) => {
        setTimers(timers.map(timer => {
            if (timer.id === id) {
                return { ...timer, title, project };
            }
            return timer;
        }));
    };

    const handleDeleteTimer = (id) => {
        setTimers(timers.filter(timer => timer.id !== id));
    };

    const handlePlay = (id) => {
        const now = Date.now();
        setTimers(timers.map(timer => {
            if (timer.id === id) {
                return { ...timer, runningSince: now };
            }
            return timer;
        }));
    };

    const handlePause = (id) => {
        const now = Date.now();
        setTimers(timers.map(timer => {
            if (timer.id === id) {
                const lastElapsed = now - timer.runningSince;
                return {
                    ...timer,
                    runningSince: null,
                    elapsed: timer.elapsed + lastElapsed,
                };
            }
            return timer;
        }));
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