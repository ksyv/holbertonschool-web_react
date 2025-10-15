
import React, { useState } from "react";
import TimerForm from "./TimerForm";

function Button({ handleFormOpen }) {
    return (
        <button onClick={handleFormOpen} className='button__outline'>
            +
        </button>
    );
}

function ActionContainer({ onFormSubmit }) {
    const [isFormOpen, setFormOpen] = useState(false);

    const handleFormSubmit = (timerData) => {
        onFormSubmit(timerData);
        setFormOpen(false);
    };

    if (isFormOpen) {
        return (
            <TimerForm
                onFormSubmit={handleFormSubmit}
                onCloseForm={() => setFormOpen(false)}
            />
        );
    } else {
        return <Button handleFormOpen={() => setFormOpen(true)} />;
    }
}

export default ActionContainer;