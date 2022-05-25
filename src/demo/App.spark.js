/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { Sparkline } from '../lib';
import { PropertyTable } from '../lib';
import '../../dash_blueprint/blueprint.css'

// const rows = [
//     {key: "1", label: "Object 1", count: 20, "type": "object", spark: Array(25).fill().map(Math.random)},
//     {key: "2", label: "Object with a really super long name", count: 10, "type": "object", spark: Array(25).fill().map(Math.random)},
//     {key: "3", label: "Object 3", count: 5, "type": "object", spark: Array(25).fill().map(Math.random)},
//     {key: "4", label: "Object 4", count: 5, "type": "object", spark: Array(25).fill().map(Math.random)},
//     {key: "5", label: "Object 5", count: 5, "type": "concept", spark: Array(25).fill().map(Math.random)},
//     {key: "6", label: "Object 6", count: 6, spark: Array(25).fill().map(Math.random)},
//     {key: "7", label: "Object 7", count: 4, spark: Array(25).fill().map(Math.random)},
//     {key: "8", label: "Object 8", count: 5, spark: Array(25).fill().map(Math.random)},
//     {key: "9", label: "Object 9", count: 5, spark: Array(25).fill().map(Math.random)},
//     {key: "10", label: "Object 10", count: 5, spark: Array(25).fill().map(Math.random)},
// ]

const rows = [...Array(40).keys()].map((i) => {
    return {
        key: "" + i,
        label: "Object " + i,
        count: Math.trunc(Math.random() * 50),
        type: "object",
        spark: Array(25).fill().map(Math.random)
    };
})
console.log(rows);

const columns = [
    {
        "label": null,
        "type": "action",
        "icon": "locate",
    },
    {
        "label": "Name",
        "key": "label",
        "type": "string",
        "filter": "string"
    },
    {
        "label": "Count",
        "key": "count",
        "type": "number",
        "filter": "string"
    },
    {
        "label": "Spark",
        "key": "spark",
        "type": "sparkline",
        "props": {
            barSeries: {strokeWidth: 0}
        }
    },
    {
        "label": "Type",
        "key": "type",
        "type": "string",
        "filter": "select",
    },
    
]

const actions = ["target", "info"]

const spark = {
    data: Array(25).fill().map(Math.random),
    width: 400,
    lineSeries: {
      curve: 'cardinal'
    },
    barSeries: {
        strokeWidth: 0
    }
}

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
                <PropertyTable rows={rows} columns={columns} actions={actions}></PropertyTable>
            </div>
        )
    }
}

export default App;
