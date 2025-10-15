import React, { useState } from "react";

const msToHMS = (ms) => {
    if (!ms || ms < 0) return { hours: '', minutes: '', seconds: '' };
    let totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return { hours, minutes, seconds };
};

function TimerForm({ onFormSubmit, onCloseForm, ...timer }) {
    const isEditing = !!timer.id;
    
    const [title, setTitle] = useState(timer.title || "");
    const [project, setProject] = useState(timer.project || "");
    const [type, setType] = useState(timer.type || 'chrono');
    
    const initialTime = timer.type === 'minuteur' ? timer.remaining : timer.elapsed;
    const [duration, setDuration] = useState(msToHMS(initialTime));

    const handleDurationChange = (e) => {
        const { name, value } = e.target;
        setDuration(prev => ({ ...prev, [name]: parseInt(value, 10) || 0 }));
    };

    const handleSubmit = () => {
        const totalSeconds = (duration.hours || 0) * 3600 + (duration.minutes || 0) * 60 + (duration.seconds || 0);
        
        if (isEditing === false && type === 'minuteur' && totalSeconds <= 0) {
            alert("Veuillez entrer une durée valide pour le minuteur.");
            return;
        }

        onFormSubmit({
            id: timer.id,
            title,
            project,
            type,
            duration: totalSeconds * 1000
        });
    };

    const submitText = isEditing ? "Modifier" : "Créer";

    return (
        <div className='form'>
            <div className='form--content'>
                {!isEditing && (
                    <div className="form--item radio-group" style={{ flexDirection: 'row', gap: '2rem', justifyContent: 'center', marginBottom: '2rem' }}>
                        <label className="radio-label">
                            <input type="radio" name="type" value="chrono" checked={type === 'chrono'} onChange={() => setType('chrono')} />
                            <span className="radio-custom"></span>
                            <span>Chronomètre</span>
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="type" value="minuteur" checked={type === 'minuteur'} onChange={() => setType('minuteur')} />
                            <span className="radio-custom"></span>
                            <span>Minuteur</span>
                        </label>
                    </div>
                )}
                
                <div className='form--item'>
                    <label>Titre</label>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titre du Timer" />
                </div>
                <div className='form--item'>
                    <label>Projet</label>
                    <input type='text' value={project} onChange={(e) => setProject(e.target.value)} placeholder="Nom du projet" />
                </div>

                {(type === 'minuteur' || isEditing) && (
                    <div className="form--item">
                        <label>
                            {isEditing 
                                ? (type === 'minuteur' ? 'Ajuster la durée restante' : 'Ajuster le temps écoulé')
                                : 'Durée'
                            }
                        </label>
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