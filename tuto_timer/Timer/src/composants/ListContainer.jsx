import React, {Component} from "react";
import Container from "./Container";
import PropTypes from 'prop-types';

const ListContainer = (props) => {
    const renderContainer = () => {
        return props.timers.map((timer => {
            return (
            <Container 
                onFormSubmit={props.onFormSubmit}
                onDelete={props.onDelete}
                key={timer.id}
                onPlay={props.onPlay}
                onPause={props.onPause}
                {...timer} />
            )
        }))
    }
    return (
        <div>
            <div className="list--container">
                {renderContainer()}
            </div>
        </div>
    )
}

ListContainer.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    timers: PropTypes.array.isRequired,
    onPlay: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
}

export default ListContainer;