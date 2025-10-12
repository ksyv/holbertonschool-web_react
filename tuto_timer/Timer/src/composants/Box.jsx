import React, {Component} from "react";
import ActionContainer from "./ActionContainer";
import ListContainer from "./ListContainer";

class Box extends Component {
    render() {
        return(
            <div>
                <div>
                    <ListContainer />
                    <ActionContainer />
                </div>
            </div>
        )
    }
}

export default Box;