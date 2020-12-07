import React from 'react';
import TextBox from './index';

export default {
    title: 'TextBox',
    component: TextBox,
};

const Template = (args) => <TextBox {...args} />;

export const TextBox_Small_Gray = Template.bind({});
TextBox_Small_Gray.args = {
    size: "small",
    theme: {main: "gray"},
    defaultValue: '',
};
export const TextBox_Default_Gray = Template.bind({});
TextBox_Default_Gray.args = {
    size: "default",
    theme: {main: "gray"},
    defaultValue: '',
};
export const TextBox_Large_Gray = Template.bind({});
TextBox_Large_Gray.args = {
    size: "large",
    theme: {main: "gray"},
    defaultValue: '',
};


export const TextBox_Default = Template.bind({});
TextBox_Default.args = {
    theme: {},
    defaultValue: '',
}

