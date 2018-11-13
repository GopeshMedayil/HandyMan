import React, { Component } from 'react';

const backDropStlye = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50
}
const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 800,
    minHeight: 300,
    margin: '0 auto',
    padding: 30,
    position: "relative"
};

const footerStyle = {
    position: "absolute",
    bottom: 20
};

export default class Modal extends Component {

    onClose = () => {
        this.props.onClose && this.props.onClose();
    }
    onKeyUp = (e) => {
        // Lookout for ESC key (27)
        if (e.which === 27 && this.props.show) {
            this.onClose(e);
        }
    }
    componentDidMount = () => {
        console.log("DID MOUNT")
        document.addEventListener("keyup", this.onKeyUp);
    }

    componentWillUnmount = () => {
        console.log("UNMOUNT");
        document.removeEventListener("keyup", this.onKeyUp);

    }
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div style={backDropStlye}>
                <div style={modalStyle}>
                    <div style={footerStyle}>
                        <button onClick={(e) => { this.onClose(e) }}>
                            Close
                        </button>
                    </div>
                    {this.props.children}

                </div>
            </div>

        )
    }
}