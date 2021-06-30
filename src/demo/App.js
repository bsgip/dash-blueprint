/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { Button } from '../lib';
import { Histogram } from '../lib';
import '../../dash_blueprint/blueprint.css'

const rows = [
    {key: "1", label: "Object 1", count: 20},
    {key: "2", label: "Object with a really super long name", count: 10},
    {key: "3", label: "Object 3", count: 5},
    {key: "4", label: "Object 4", count: 5},
    {key: "5", label: "Object 5", count: 5},
    {key: "6", label: "Object 6", count: 5},
    {key: "7", label: "Object 7", count: 5},
    {key: "8", label: "Object 8", count: 5},
    {key: "9", label: "Object 9", count: 5},
    {key: "10", label: "Object 10", count: 5},
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
