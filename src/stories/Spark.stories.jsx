import React from 'react';

// import { Button } from './Button';
import { Sparkline } from '../lib';

export default {
  title: 'Spark/Sparkline',
  component: Sparkline,
};

const Template = (args) => <Sparkline {...args} />;

export const SimpleLine = Template.bind({});
SimpleLine.args = {
    data: Array(25).fill().map(Math.random),
    lineSeries: {
      curve: 'cardinal',
      strokeDasharray: "1 2",   
      strokeWidth: 0.5
    }
};

export const SimpleBar = Template.bind({});
SimpleBar.args = {
    data: Array(25).fill().map(Math.random),
    barSeries: {
      strokeWidth: 0
    }

};