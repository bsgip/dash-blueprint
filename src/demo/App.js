/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { Button } from '../lib';
import { Histogram } from '../lib';
import '../../dash_blueprint/blueprint.css'

const rows = [
    {label: "Object 1", count: 20},
    {label: "Object 2", count: 10}
]

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
                <Histogram rows={rows}></Histogram>
            </div>
        )
    }
}

export default App;
