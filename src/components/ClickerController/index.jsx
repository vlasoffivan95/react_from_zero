import React, { Component } from 'react';

class ClickerController extends Component {
    render() {
        return (
            <button onClick={this.props.click_func}>Click Me</button>

        );
    }
}

export default ClickerController;
