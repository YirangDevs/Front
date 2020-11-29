import React from 'react';

import Button from './Button';

export default {
    title: 'Example/Button',
    component: Button,
};

const Template = (args) => <Button {...args} />;


export const Btn = Template.bind({});
Btn.args = {
    width: 'auto',
    value: 'Button',
};

