import React from 'react';

import Button from './index';

export default {
    title: 'Button',
    component: Button,
    decorators: [(Story) => <div style={{ margin: '3em' }}><Story/></div>]
};

const Template = (args) => <Button {...args} />;


export const Small_Btn = Template.bind({});
Small_Btn.args = {
    size: "small",
    value: 'small button',
};

export const Default_Btn = Template.bind({});
Default_Btn.args = {
    size: "default",
    value: 'default button',
};


export const Large_Btn = Template.bind({});
Large_Btn.args = {
    size: "large",
    value: 'large button',
};



export const Block_Btn = Template.bind({});
Block_Btn.args = {
    block: true,
    value: 'block button',
};
