import React from 'react';
import TextBox from './index';

export default {
    title: 'TextBox',
    component: TextBox,
};

const Template = (args) => <TextBox {...args} />;

export const Small_TextBox = Template.bind({});
Small_TextBox.args = {
    size: "small",
    defaultValue: '',
};
export const Default_TextBox = Template.bind({});
Default_TextBox.args = {
    size: "default",
    defaultValue: '',
};
export const Large_TextBox = Template.bind({});
Large_TextBox.args = {
    size: "large",
    defaultValue: '',
};

