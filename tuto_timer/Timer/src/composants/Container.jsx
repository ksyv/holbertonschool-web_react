// src/composants/Container.jsx

import React, { useState } from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

function Container(props) {
    const [isFormOpen, setFormOpen] = useState(false);

    const handleFormSubmit = (timerData) => {
        props.onFormSubmit(timerData);
        setFormOpen(false);
    };

    if (isFormOpen) {
        return (
            <TimerForm
                id={props.id}
                title={props.title}
                project={props.project}
                onFormSubmit={handleFormSubmit}
                onCloseForm={() => setFormOpen(false)}
            />
        );
    } else {
        return (
            <Timer
                {...props}
                onEditFormOpen={() => setFormOpen(true)}
            />
        );
    }
}

export default Container;