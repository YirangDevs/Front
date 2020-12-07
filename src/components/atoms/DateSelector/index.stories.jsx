import React from 'react';

import DateSelector from './index';

export default {
    title: 'DateSelector',
    component: DateSelector,
};

const Template = (args) => <DateSelector {...args} />;


export const Component = Template.bind({});
Component.args = {
    width: '9rem',
    height: '2rem',
    defaultValue: '2020-11-20',
};

