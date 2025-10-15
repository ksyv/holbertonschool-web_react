// src/composants/TimerForm.jsx

import React, { useState } from "react";

function TimerForm({ id, title: initialTitle = "", project: initialProject = "", onFormSubmit, onCloseForm }) {
    const [title, setTitle] = useState(initialTitle);
    const [project, setProject] = useState(initialProject);
    const [type, setType] = useState('chrono');
    const [duration, setDuration] = useState({ hours: '', minutes: '', seconds: '' });

    const handleDurationChange = (e) => {
        const { name, value } = e.target;
        setDuration(prev => ({ ...prev, [name]: parseInt(value, 10) || 0 }));
    };

    const handleSubmit = () => {
        if (type === 'minuteur') {
            const totalSeconds = (duration.hours || 0) * 3600 + (duration.minutes || 0) * 60 + (duration.seconds || 0);
            if (totalSeconds <= 0) {
                alert("Veuillez entrer une durée valide pour le minuteur.");
                return;
            }
            onFormSubmit({ title, project, type, duration: totalSeconds * 1000 });
        } else {
            onFormSubmit({ id, title, project, type: 'chrono' });
        }
    };

    const submitText = id ? "Modifier" : "Créer";

    return (
        <div className='form'>
            <div className='form--content'>
                <div className="form--item" style={{ flexDirection: 'row', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
                    <label>
                        <input type="radio" name="type" value="chrono" checked={type === 'chrono'} onChange={() => setType('chrono')} />
                        Chronomètre
                    </label>
                    <label>
                        <input type="radio" name="type" value="minuteur" checked={type === 'minuteur'} onChange={() => setType('minuteur')} />
                        Minuteur
                    </label>
                </div>
                
                <div className='form--item'>
                    <label>Titre</label>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titre du timer" />
                </div>
                <div className='form--item'>
                    <label>Projet</label>
                    <input type='text' value={project} onChange={(e) => setProject(e.target.value)} placeholder="Titre du projet" />
                </div>

                {type === 'minuteur' && (
                    <div className="form--item">
                        <label>Durée</label>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <input type="number" name="hours" value={duration.hours} onChange={handleDurationChange} placeholder="HH" min="0" />
                            <input type="number" name="minutes" value={duration.minutes} onChange={handleDurationChange} placeholder="MM" min="0" max="59" />
                            <input type="number" name="seconds" value={duration.seconds} onChange={handleDurationChange} placeholder="SS" min="0" max="59" />
                        </div>
                    </div>
                )}
            </div>
            <div className='form--button'>
                <button className='button btn--submit' onClick={handleSubmit}>{submitText}</button>
                <button className='button btn--cancel' onClick={onCloseForm}>Annuler</button>
            </div>
        </div>
    );
}

export default TimerForm;