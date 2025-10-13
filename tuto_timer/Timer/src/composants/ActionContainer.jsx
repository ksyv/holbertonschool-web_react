import React, {Component} from "react";
import TimerForm from "./TimerForm";
import Button from "./Button";

class ActionContainer extends Component {
    render() {
        return(
            <div>
                {this.props.isFormOpen ? (
                    <TimerForm />
                ) : (
                    <Button />
                )}
            </div>
        )
    }
}

export default ActionContainer;