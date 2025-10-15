// src/composants/TimerForm.jsx

import React, { useState } from "react";

function TimerForm({ id, title: initialTitle = "", project: initialProject = "", onFormSubmit, onCloseForm }) {
    // On utilise useState pour "mémoriser" les valeurs des champs
    const [title, setTitle] = useState(initialTitle);
    const [project, setProject] = useState(initialProject);

    const handleSubmit = () => {
        onFormSubmit({
            id,
            title,
            project,
        });
    };

    const submitText = id ? "Modifier" : "Créer";

    return (
        <div className='form'>
            <div className='form--content'>
                <div className='form--item'>
                    <label>Titre</label>
                    <input
                        type='text'
                        placeholder='Mon Titre'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='form--item'>
                    <label>Projet</label>
                    <input
                        type='text'
                        placeholder='Mon Projet'
                        value={project}
                        onChange={(e) => setProject(e.target.value)}
                    />
                </div>
            </div>
            <div className='form--button'>
                <button className='button btn--submit' onClick={handleSubmit}>{submitText}</button>
                <button className='button btn--cancel' onClick={onCloseForm}>Annuler</button>
            </div>
        </div>
    );
}

export default TimerForm;