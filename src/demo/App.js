/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { RangeSelector, Button } from '../lib';

import "@blueprintjs/core/lib/css/blueprint.css";

const data = [...Array(1000).keys()].map((i) => {
    return {
        x: Math.trunc(Math.random() * 50),
        value: Math.trunc(Math.random() * 50) + 50
    };
})

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
            <div style={{height: "300px"}}>
                <RangeSelector 
                    data={data}
                    // yLines={[220,240,260]}
                    isDate={false}  
                    selectSingle={false}
                    group={true}
                    
                />
                <Button text="foo" intent="success" minimal={true}></Button>
            </div>
        )
    }
}

export default App;
