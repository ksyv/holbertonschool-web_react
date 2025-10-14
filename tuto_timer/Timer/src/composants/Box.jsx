import React, {Component} from "react";
import ActionContainer from "./ActionContainer";
import ListContainer from "./ListContainer";

class Box extends Component {
    state = {
        timers: [
            {
                title:'apprendre React',
                project:'Dev Web',
                id:'01',
                elapsed: 5609628,
                runningSince: null
            },
            {
                title:'apprendre React',
                project:'Dev Web',
                id:'02',
                elapsed: 1349620,
                runningSince: null
            }
        ]
    }
    render() {
        return(
            <div className='boxed--view'> 
                <div className='boxed--view__box'>
                    <ListContainer timers={this.state.timers} />
                    <ActionContainer />
                        
                </div>
            </div>
        )
    }
}

export default Box;