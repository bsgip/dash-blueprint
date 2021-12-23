import {H4} from '@blueprintjs/core';
import React from 'react';

import {CollapseCard, CollapseDetails} from '../lib';

export default {
    title: 'Cards/CollapseCard',
    component: CollapseCard,
    argTypes: {},
};

const Template = (args) => {
    const {hiddenChildren, ...cardProps} = args;
    return (
        <CollapseCard {...cardProps}>
            <H4>{'This header is not hidden'}</H4>
            <CollapseDetails>{hiddenChildren}</CollapseDetails>
            <div>{'This div is not hidden'}</div>
        </CollapseCard>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    hiddenChildren: 'This is some hidden text',
    // interactive: true,
    elevation: 1,
};
