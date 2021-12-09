/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';


import { Dialog } from '../lib';
import '../../dash_blueprint/blueprint.css'


class App extends Component {

    constructor() {
        super();
        this.state = {
            value: ''
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <Dialog title="Dialog Box">
                    {"This is a dialog box"}
                </Dialog>
            </div>
        )
    }
}

export default App;
