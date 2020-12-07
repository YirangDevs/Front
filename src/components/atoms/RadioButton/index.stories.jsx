import React from 'react';

import RadioBox from './index';

export default {
    title: 'RadioBox',
    component: RadioBox,
};

const Template = (args) => <RadioBox {...args} />;

const options = ["남성", "여성"];

export const RadioBox_Small_Gray = Template.bind({});
RadioBox_Small_Gray.args = {
    size: "small",
    name: "gender",
    options: options,
};
export const RadioBox_Default_Gray = Template.bind({});
RadioBox_Default_Gray.args = {
    size: "default",
    name: "gender",
    options: options,
};
export const RadioBox_Large_Gray = Template.bind({});
RadioBox_Large_Gray.args = {
    size: "large",
    name: "gender",
    options: options,
};