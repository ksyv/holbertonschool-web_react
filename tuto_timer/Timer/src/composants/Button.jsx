import React, {Component} from "react";
import ActionContainer from "./ActionContainer";
import ListContainer from "./ListContainer";

class Button extends Component {
    render() {
        return(
            <button onClick={this.props.handleFormOpen} className='button__outline'> 
                +
            </button>
        )
    }
}

export default Button;