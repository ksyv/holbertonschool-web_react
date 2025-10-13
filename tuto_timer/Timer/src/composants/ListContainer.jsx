import React, {Component} from "react";
import Container from "./Container";

class ListContainer extends Component {
    render() {
        return(
            <div>
                <div className="list--container">
                    <Container 
                        isFormOpen={false}
                    />
                    <Container
                        isFormOpen
                    />
                    <Container
                        isFormOpen={false}
                    />
                </div>
            </div>
        )
    }
}

export default ListContainer;