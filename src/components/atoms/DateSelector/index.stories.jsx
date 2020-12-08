import React from 'react';

import DateSelector from './index';

export default {
    title: 'DateSelector',
    component: DateSelector,
};

const Template = (args) => <DateSelector {...args} />;



export const DateSelector_Small_Gray = Template.bind({});
DateSelector_Small_Gray.args = {
    size: "small",
    theme: "gray",
    defaultValue: '2020-11-20',
};
export const DateSelector_Default_Gray = Template.bind({});
DateSelector_Default_Gray.args = {
    size: "default",
    theme: "gray",
    defaultValue: '2020-11-20',
};
export const DateSelector_Large_Gray = Template.bind({});
DateSelector_Large_Gray.args = {
    size: "large",
    theme: "gray",
    defaultValue: '2020-11-20',
};

export const DateSelector_Default = Template.bind({});
DateSelector_Default.args = {
    theme: "default",
    defaultValue: '2020-11-20',
};

