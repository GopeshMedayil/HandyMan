//@flow
import React, { PureComponent, Fragment } from "react";
import Modal from '../Modal';
import { loadPackageJson } from '../../services/file-read-service';

const { dialog } = window.require('electron').remote;
type Props = {
    onClose: () => void

};
type State = {
    show: boolean;
    path: string,
    projects: Array
};

class App extends PureComponent<Props, State> {

    state = {
        show: false,
        path: "",
        projects: []
    }
    showModal = () => {

        this.setState({
            ...this.state,
            show: !this.state.show,
            path: ""
        });

    }

    onSubmit = (e: any) => {
        e.preventDefault();
        loadPackageJson(this.state.path).then((packageInfo) => {
            const projectInfo = {
                name: packageInfo.name,
                path: this.state.path
            }

            this.setState({
                ...this.state,
                show: !this.state.show,
                projects: [...this.state.projects, projectInfo]
            });
            console.log(this.state);


        }).catch((err) => {
            console.log("error", err)
        })
    }

    selectProject = (e: any) => {
        e.preventDefault();
        var that = this;
        dialog.showOpenDialog({ properties: ['openDirectory'] }, function (paths) {
            const [path] = paths;

            that.setState({
                ...that.state,
                path: path
            });
            console.log(that.state)
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
                <Modal show={this.state.show} onClose={this.showModal}>
                    <h2>Add Project</h2>
                    <hr />
                    <form>

                        <div className="form-group">
                            <button className="btn btn-secondary" onClick={e => this.selectProject(e)}>Choose Project</button>
                            {this.state.path}
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