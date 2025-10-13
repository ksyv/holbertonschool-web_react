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
                    <Timer
                        title='apprendre React'
                        projet='Dev Web'
                        id='01'
                        elapsed='5609628'
                        runningSince={null}
                    />
                )}
            </div>
        )
    }
}

export default Container;