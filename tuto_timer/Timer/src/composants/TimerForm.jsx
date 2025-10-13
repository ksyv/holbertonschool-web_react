import React, {Component} from "react";
import ActionContainer from "./ActionContainer";
import ListContainer from "./ListContainer";

class TimerForm extends Component {
    render() {
        const submitText = this.props.title ? "Modifier" : "Créer";
        return(
            <div className='form'> 
                <div className='form--content'>
                    <div className='form--item'>
                        <label>Titre</label>
                        <input
                            type='text'
                            placeholder='Mon Titre'
                        />
                    </div>
                    <div className='form--item'>
                        <label>Projet</label>
                        <input
                            type='text'
                            placeholder='Mon Projet'
                        />
                    </div>
                </div>
                <div className='form--button'>
                    <button className='button btn--submit'>{submitText}</button>
                    <button className='button btn--cancel'>Annuler</button>
                </div>
            </div>
        )
    }
}

export default TimerForm;