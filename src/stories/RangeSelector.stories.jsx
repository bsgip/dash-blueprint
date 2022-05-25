import React from 'react';

import {RangeSelector} from '../lib';

export default {
    title: 'D3/RangeSelector',
    component: RangeSelector,
    argTypes: {},
};

const data = [...Array(1000).keys()].map((i) => {
    return {
        x: Math.trunc(Math.random() * 50),
        value: Math.trunc(Math.random() * 50) + 50,
    };
});

const Template = (args) => {
    const {yLines, ...selectorProps} = args;
    return (
        <div style={{height: '300px'}}>
            <RangeSelector
                data={data}
                yLines={yLines}
                isDate={false}
                selectSingle={false}
                group={true}
            />
        </div>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    yLines: [0, 20, 40],
};
