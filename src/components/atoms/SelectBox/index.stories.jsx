import React from 'react';

import SelectBox from './index';

export default {
    title: 'SelectBox',
    component: SelectBox,
};

const Template = (args) => <SelectBox {...args} />;

const options = ["수성구", "동구", "서구", "남구", "북구", "중구", "달서구"];

export const SelectBox_Small_Gray = Template.bind({});
SelectBox_Small_Gray.args = {
    size: "small",
    theme: {main: "gray"},
    defaultValue: '',
    options: options,
};
export const SelectBox_Default_Gray = Template.bind({});
SelectBox_Default_Gray.args = {
    size: "default",
    theme: {main: "gray"},
    defaultValue: '',
    options: options,
};
export const SelectBox_Large_Gray = Template.bind({});
SelectBox_Large_Gray.args = {
    size: "large",
    theme: {main: "gray"},
    defaultValue: '',
    options: options,
};


export const SelectBox_Default = Template.bind({});
SelectBox_Default.args = {
    theme: {},
    defaultValue: '',
    options: options,
};

