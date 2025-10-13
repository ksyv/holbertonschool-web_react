import React, {Component} from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

class Container extends Component {
    render() {
        return(
            <div className=''> 
                {this.props.isFormOpen ? (
                    <TimerForm />
                ) : (
                    <Timer/>
                )}
            </div>
        )
    }
}

export default Container;