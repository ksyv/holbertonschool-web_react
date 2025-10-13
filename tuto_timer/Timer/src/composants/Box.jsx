import React, {Component} from "react";
import ActionContainer from "./ActionContainer";
import ListContainer from "./ListContainer";

class Box extends Component {
    render() {
        return(
            <div className='boxed--view'> 
                <div className='boxed--view__box'>
                    <ListContainer />
                    <ActionContainer 
                        isFormOpen={false}
                    />
                        
                </div>
            </div>
        )
    }
}

export default Box;