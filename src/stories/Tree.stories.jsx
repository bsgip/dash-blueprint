
import React from 'react';

import {Tree} from '../lib';
import {IconNames} from '@blueprintjs/icons';



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

export default {
    title: 'Core/Tree',
    component: Tree,
    argTypes: {
     
    },
};

const Template = (args) => {
    
    return <Tree nodes={TREE} />;
};

export const Primary = Template.bind({});
Primary.args = {
    
};