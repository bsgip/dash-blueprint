import {H4} from '@blueprintjs/core';
import React from 'react';

import {CollapseCardList, CollapseCard, CollapseDetails} from '../lib';

export default {
    title: 'Cards/CollapseCardList',
    component: CollapseCardList,
    argTypes: {},
};

const Template = (args) => {
    const {hiddenChildren, ...cardProps} = args;
    return (
        <CollapseCardList>
            <CollapseCard key={'1'} {...cardProps}>
                <H4>{'This header is not hidden'}</H4>
                <CollapseDetails>{hiddenChildren}</CollapseDetails>
                <div>{'This div is not hidden'}</div>
            </CollapseCard>
            <CollapseCard key={'2'} {...cardProps}>
                <H4>{'This header is not hidden'}</H4>
                <CollapseDetails>{hiddenChildren}</CollapseDetails>
                <div>{'This div is not hidden'}</div>
            </CollapseCard>
        </CollapseCardList>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    // hiddenChildren: 'This is some hidden text',
    // interactive: true,
    elevation: 1,
};
