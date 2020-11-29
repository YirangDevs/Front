import React from 'react';

import Button from './Button';

export default {
    title: 'Example/Button',
    component: Button,
};

const Template = (args) => <Button {...args} />;


export const Btn = Template.bind({});
Btn.args = {
    width: '9rem',
    height: '2.5rem',
    value: 'Button',
};

