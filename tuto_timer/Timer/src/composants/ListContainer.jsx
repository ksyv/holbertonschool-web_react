import React from "react";
import Container from "./Container";

const ListContainer = (props) => {
    return (
        <div className="list--container">
            {/* On récupère l'index de chaque timer dans la liste */}
            {props.timers.map((timer, index) => (
                <Container 
                    key={timer.id}
                    {...props}
                    {...timer} 
                    index={index} // Et on le passe comme une nouvelle prop
                />
            ))}
        </div>
    );
};

export default ListContainer;
