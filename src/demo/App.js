/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { Button } from '../lib';
import { Histogram } from '../lib';
import '../../dash_blueprint/blueprint.css'

const rows = [
    {key: "1", label: "Object 1", count: 20},
    {key: "2", label: "Object with a really super long name", count: 10}
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
