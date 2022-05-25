/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import {Tree, Button} from '../lib';

import '@blueprintjs/core/lib/css/blueprint.css';

const TREE = [
    {id: 0, hasCaret: true, icon: 'folder-close', label: 'Folder 0'},
    {
        id: 1,
        icon: 'folder-close',
        isExpanded: true,
        label: 'FOLDER 1',
        childNodes: [
            {
                id: 2,
                icon: 'document',
                label: 'Item 0',
                secondaryLabel: 'SECONDARY',
            },
            {
                id: 3,
                label:
                    'Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.',
            },
            {
                id: 4,
                hasCaret: true,
                icon: 'folder-close',
                childNodes: [
                    {id: 5, label: 'No-Icon Item'},
                    {id: 6, icon: 'tag', label: 'Item 1'},
                    {
                        id: 7,
                        hasCaret: true,
                        icon: 'folder-close',
                        label: 'Folder 3',
                        childNodes: [
                            {id: 8, icon: 'document', label: 'Item 0'},
                            {id: 9, icon: 'tag', label: 'Item 1'},
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        hasCaret: true,
        icon: 'folder-close',
        label: 'Super secret files',
        disabled: true,
    },
];

class App extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div style={{height: '300px'}}>
                <Tree nodes={TREE} />
                <Button text="foo" intent="success" minimal={true}></Button>
            </div>
        );
    }
}

export default App;
