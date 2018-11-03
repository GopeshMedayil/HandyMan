import React, { Component } from 'react';

export default class Modal extends Component {
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div>
                <h2>Welcome Modal</h2>
                {this.props.children}
            </div>

        )
    }
}