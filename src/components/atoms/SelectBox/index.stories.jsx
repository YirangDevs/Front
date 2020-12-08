import React from 'react';

import SelectBox from './index';

export default {
    title: 'SelectBox',
    component: SelectBox,
};

const Template = (args) => <SelectBox {...args} />;

const options = ["수성구", "동구", "서구", "남구", "북구", "중구", "달서구"];

export const Small_SelectBox = Template.bind({});
Small_SelectBox.args = {
    size: "small",
    defaultValue: '',
    options: options,
};
export const Default_SelectBox = Template.bind({});
Default_SelectBox.args = {
    size: "default",
    defaultValue: '',
    options: options,
};
export const Large_SelectBox = Template.bind({});
Large_SelectBox.args = {
    size: "large",
    defaultValue: '',
    options: options,
};
