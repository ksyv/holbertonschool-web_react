import React, {Component} from "react";
import TimerForm from "./TimerForm";
import Button from "./Button";
import PropTypes from 'prop-types';

class ActionContainer extends Component {
    static propTypes = {
        onFormSubmit: PropTypes.func.isRequired
    }
    state = {
        isFormOpen: false
    }

    handleFormOpen = () => {
        this.setState({isFormOpen: true});
    }

    handleFormClose = () => {
        this.setState({ isFormOpen: false});
    }

    onFormSubmit = ({title, project}) => {
        this.handleFormClose()
        this.props.onFormSubmit({title, project});
    } 

    render() {
        if(this.state.isFormOpen) {
            return (
                <TimerForm 
                    onFormSubmit={this.onFormSubmit} 
                    onCloseForm={this.handleFormClose} />
            )
        } else {
            return <Button handleFormOpen={this.handleFormOpen}/>
        }
    }
}

export default ActionContainer;