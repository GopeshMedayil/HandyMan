//@flow
import React, { PureComponent, Fragment } from "react";
import Modal from '../Modal';

type Props = {
    onClose: () => void

};
type State = {
    show: boolean;
};

class App extends PureComponent<Props, State> {

    state = {
        show: false
    }
    showModal = () => {

        this.setState({
            ...this.state,
            show: !this.state.show
        });

    }

    onSubmit = (e: any) => {
        e.preventDefault();
        alert("submit")
    }

    componentDidMount() {
        console.log("App loaded")
    }

    render() {
        return (
            <Fragment>
                <div className="well"><p>Welcome Handyman!!</p></div>
                <button className="btn btn-primary btn-small" onClick={this.showModal}>Add Project</button>
                <Modal show={this.state.show} onClose={this.showModal}>
                    <h2>Add Project</h2>
                    <hr />
                    <form>

                        <div className="form-group">
                            <label htmlFor="upldpjct">Upload Project:</label>
                            <button className="btn btn-secondary">Choose Project</button>
                        </div>
                        <div className="form-group">
                            <label htmlFor="port">Port:</label>
                            <input type="text" className="form-control" id="port" />
                        </div>

                        <button type="submit" className="btn btn-default" onClick={e => this.onSubmit(e)}>Submit</button>
                    </form>
                </Modal>
            </Fragment>

        )
    }

}

export default App;