import React from 'react';

import RadioBox from './index';

export default {
    title: 'RadioBox',
    component: RadioBox,
};

const Template = (args) => <RadioBox {...args} />;

const options = ["남성", "여성"];

export const Small_RadioBox = Template.bind({});
Small_RadioBox.args = {
    size: "small",
    name: "gender",
    options: options,
};
export const Default_RadioBox = Template.bind({});
Default_RadioBox.args = {
    size: "default",
    name: "gender",
    options: options,
};
export const Large_RadioBox = Template.bind({});
Large_RadioBox.args = {
    size: "large",
    name: "gender",
    options: options,
};