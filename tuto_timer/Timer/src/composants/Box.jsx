import React, {Component} from "react";
import ActionContainer from "./ActionContainer";
import ListContainer from "./ListContainer";
import { v4 as uuidv4 } from 'uuid';

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

    handleCreateTimer = ({title, project}) => {
        const timer = {
            title, 
            project,
            id: uuidv4(),
            elapsed: 0,
            runningSince: null,
        }
        this.setState({
            timers: [...this.state.timers, timer]
        })
    }

    handleEditTimer = ({id, title, project}) => {
        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === id) {
                    return {
                        ...timer,
                        title,
                        project
                    }
                }
                return {...timer}
            })
        })
    }

    handleDelete = id => {
        this.setState({
            timers: this.state.timers.filter(timer => timer.id !== id)
        })
    }
    render() {
        return(
            <div className='boxed--view'> 
                <div className='boxed--view__box'>
                    <ListContainer 
                        onFormSubmit={this.handleEditTimer}
                        onDelete={this.handleDelete}
                        timers={this.state.timers} 
                    />
                    <ActionContainer onFormSubmit={this.handleCreateTimer}/>
                        
                </div>
            </div>
        )
    }
}

export default Box;