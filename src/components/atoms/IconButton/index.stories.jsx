import React from 'react';
import IconButton from './index';
import { MdFormatListBulleted } from "react-icons/md";

export default {
    title: 'IconButton',
    component: IconButton,
    subcomponents : MdFormatListBulleted,

};

const Template = (args) => (
    <IconButton {...args}>
        <MdFormatListBulleted/>
    </IconButton>);

export const Small_IconBtn = Template.bind({})
Small_IconBtn.args = {
    size: "small",
    value: 'small button',
};

export const Default_IconBtn = Template.bind({});
Default_IconBtn.args = {
    size: "default",
    value: 'default button',
};


export const Large_IconBtn = Template.bind({});
Large_IconBtn.args = {
    size: "large",
    value: 'large button',
};
