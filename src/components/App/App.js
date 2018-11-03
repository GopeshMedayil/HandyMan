//@flow
import React, { PureComponent, Fragment } from "react";
import Modal from '../Modal/Modal';

type Props = {

}
type State = {
    show: boolean;
}

class App extends PureComponent<Props, State> {

    state = {
        show: false
    }
    showModal = () => {
        this.setState({
            ...this.state,
            show: !this.state.show
        })
    }

    componentDidMount() {
        console.log("App loaded")
    }

    render() {
        return (
            <Fragment>
                <div className="well"><p>Welcome Handyman!!</p></div>
                <button className="btn btn-primary btn-small" onClick={this.showModal}>Add Project</button>
                <Modal show={this.state.show}>
                    THis is a Modal component
                </Modal>
            </Fragment>

        )
    }

}

export default App;