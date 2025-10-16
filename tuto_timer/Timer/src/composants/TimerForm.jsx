import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, getDocs, orderBy } from "firebase/firestore";

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
    
    const [phases, setPhases] = useState([{ name: 'Travail', minutes: 25 }, { name: 'Pause', minutes: 5 }]);
    
    useEffect(() => {
        if (isEditing && timer.type === 'pomodoro') {
            const fetchPhases = async () => {
                const phasesRef = collection(db, 'timers', timer.id, 'phases');
                const q = query(phasesRef, orderBy('order'));
                const snapshot = await getDocs(q);
                const fetchedPhases = snapshot.docs.map(doc => ({
                    name: doc.data().name,
                    minutes: doc.data().duration / 60000
                }));
                if (fetchedPhases.length > 0) {
                    setPhases(fetchedPhases);
                }
            };
            fetchPhases();
        }
    }, [isEditing, timer.id, timer.type]);

    const addPhase = () => setPhases([...phases, { name: 'Nouvelle Phase', minutes: 10 }]);
    const removePhase = (indexToRemove) => setPhases(phases.filter((_, index) => index !== indexToRemove));
    const handlePhaseChange = (index, field, value) => {
        const newPhases = [...phases];
        newPhases[index][field] = value;
        setPhases(newPhases);
    };

    // LA FONCTION MANQUANTE EST RÉ-AJOUTÉE ICI
    const handleDurationChange = (e) => {
        const { name, value } = e.target;
        setDuration(prev => ({ ...prev, [name]: parseInt(value, 10) || 0 }));
    };
    
    const handleSubmit = () => {
        if (type === 'pomodoro') {
            const phasesInMs = phases.map(p => ({ name: p.name, duration: (parseInt(p.minutes, 10) || 0) * 60 * 1000 }));
            onFormSubmit({ id: timer.id, title, project, type, phases: phasesInMs });
        } else {
            const totalSeconds = (duration.hours || 0) * 3600 + (duration.minutes || 0) * 60 + (duration.seconds || 0);
            if (!isEditing && type === 'minuteur' && totalSeconds <= 0) { alert("Durée invalide."); return; }
            onFormSubmit({ id: timer.id, title, project, type, duration: totalSeconds * 1000 });
        }
    };

    const submitText = isEditing ? "Modifier" : "Créer";

    return (
        <div className='form'>
            <div className='form--content'>
                {!isEditing && (
                    <div className="form--item radio-group" style={{ flexDirection: 'row', gap: '1.5rem', justifyContent: 'center', marginBottom: '2rem' }}>
                         <label className="radio-label">
                            <input type="radio" name="type" value="chrono" checked={type === 'chrono'} onChange={() => setType('chrono')} />
                            <span className="radio-custom"></span><span>Chronomètre</span>
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="type" value="minuteur" checked={type === 'minuteur'} onChange={() => setType('minuteur')} />
                            <span className="radio-custom"></span><span>Minuteur</span>
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="type" value="pomodoro" checked={type === 'pomodoro'} onChange={() => setType('pomodoro')} />
                            <span className="radio-custom"></span><span>Pomodoro</span>
                        </label>
                    </div>
                )}
                
                <div className='form--item'>
                    <label>Titre</label>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Session de travail" />
                </div>
                <div className='form--item'>
                    <label>Projet</label>
                    <input type='text' value={project} onChange={(e) => setProject(e.target.value)} placeholder="Projet X" />
                </div>

                {(type === 'minuteur' || (isEditing && type !== 'pomodoro')) && (
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

                {(type === 'pomodoro') && (
                    <div className="form--item">
                        <label>Phases du cycle</label>
                        {phases.map((phase, index) => (
                            <div key={index} style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                                <input type="text" value={phase.name} onChange={(e) => handlePhaseChange(index, 'name', e.target.value)} placeholder="Nom de la phase" />
                                <input type="number" value={phase.minutes} onChange={(e) => handlePhaseChange(index, 'minutes', e.target.value)} placeholder="min" style={{ width: '80px' }} />
                                <button type="button" onClick={() => removePhase(index)} className="btn-remove-phase">X</button>
                            </div>
                        ))}
                        <button type="button" onClick={addPhase} className="button__outline" style={{ height: '3.5rem', fontSize: '1.4rem', marginTop: '1rem' }}>
                            Ajouter une phase
                        </button>
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