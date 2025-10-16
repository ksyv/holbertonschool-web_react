import React from "react";
import Container from "./Container";

const ListContainer = (props) => {
    return (
        <div className="list--container">
            {props.timers.map((timer) => (
                <Container 
                    key={timer.id}
                    // On s'assure de bien passer toutes les props reçues
                    {...props}
                    {...timer} 
                />
            ))}
        </div>
    );
};

export default ListContainer;