import React, {Component} from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

class Container extends Component {
    state = {
        isFormOpen: false
    }
    render() {
        return(
            <div className='list--container'> 
                {this.state.isFormOpen ? (
                    <TimerForm 
                        title={this.props.title}
                        project={this.props.project}
                    />
                ) : (
                    <Timer
                        title={this.props.title}
                        project={this.props.project}
                        id={this.props.id}
                        elapsed={this.props.elapsed}
                        runningSince={this.props.runningSince}
                    />
                )}
            </div>
        )
    }
}

export default Container;