import React, {Component} from "react";
import TimerForm from "./TimerForm";
import Button from "./Button";

class ActionContainer extends Component {
    render() {
        if(this.props.isFormOpen) {
            return <TimerForm />
        } else {
            return <Button />
        }
    }
}

export default ActionContainer;