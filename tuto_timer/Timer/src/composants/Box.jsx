import React, {Component} from "react";
import ActionContainer from "./ActionContainer";
import ListContainer from "./ListContainer";
import { v4 as uuidv4 } from 'uuid';

const NEON_PALETTES = [
    { base: '#00ffff', shadow: '#00bfff' }, // Cyan -> Bleu
    { base: '#39ff14', shadow: '#ccff33' }, // Vert Fluo -> Vert Citron
    { base: '#ffff00', shadow: '#ff9900' }, // Jaune -> Orange
    { base: '#ff00ff', shadow: '#e600e6' }, // Magenta -> Magenta Foncé
    { base: '#ff6600', shadow: '#ff3300' }, // Orange -> Rouge-Orange
];

class Box extends Component {
    state = {
        timers: [
            {
                title:'',
                project:'',
                id:'01',
                elapsed: 0,
                runningSince: null
            },
        ]
    }

    handleCreateTimer = ({title, project}) => {
        const nextPalette = NEON_PALETTES[this.state.timers.length % NEON_PALETTES.length];
        const timer = {
            title, 
            project,
            id: uuidv4(),
            elapsed: 0,
            runningSince: null,
            color: nextPalette.base,
            shadowColor: nextPalette.shadow,
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

    handlePlay = id => {
        console.log('play')
        const now = Date.now()
        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === id) {
                    return {
                        ...timer,
                        runningSince: now
                    }
                } else {
                    return  {...timer}
                }
            })
        })
    }

    handlePause = id => {
        console.log('pause')
        const now = Date.now()
        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === id) {
                    const nextElapsed = now - timer.runningSince;
                    return {
                        ...timer,
                        runningSince: null,
                        elapsed: timer.elapsed + nextElapsed
                    }
                } else {
                    return  {...timer}
                }
            })
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
                        onPlay={this.handlePlay}
                        onPause={this.handlePause}
                    />
                    <ActionContainer onFormSubmit={this.handleCreateTimer}/>
                        
                </div>
            </div>
        )
    }
}

export default Box;