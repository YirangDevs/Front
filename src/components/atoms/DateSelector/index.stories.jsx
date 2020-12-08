import React from 'react';

import DateSelector from './index';

export default {
    title: 'DateSelector',
    component: DateSelector,
};

const Template = (args) => <DateSelector {...args} />;



export const Small_DateSelector = Template.bind({});
Small_DateSelector.args = {
    size: "small",
    defaultValue: '2020-11-20',
};
export const Default_DateSelector = Template.bind({});
Default_DateSelector.args = {
    size: "default",
    defaultValue: '2020-11-20',
};
export const Large_DateSelector = Template.bind({});
Large_DateSelector.args = {
    size: "large",
    defaultValue: '2020-11-20',
};

