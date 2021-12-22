import React from 'react';

import { CheckboxGroup, Checkbox } from '../lib';
import { Intent} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

export default {
  title: 'Core/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    // intent: {
    //   control: 'select',
    //   options: [...Object.values(Intent)]
    // }
  },

};



const Template = (args) => {
  return (<CheckboxGroup >
    <Checkbox>{"Checkbox 1"}</Checkbox>
    <Checkbox>{"Checkbox 2"}</Checkbox>
  </CheckboxGroup>)

};

export const Default = Template.bind({});
Default.args = {
};

