import React from 'react';
import Row from "./Row/index"
import Col from "./Column/index"
import styled from "styled-components";

const Box = styled.div`
    background: #0092ff;
    width: auto;
    height : 4rem;
    color : white;
`
const Box2 = styled.div`
    background: #0092ff;
    width: auto;
    height : 2rem;
    color : white;
`
export default {
    title: 'Grid2',
    component: Row,
    decorators: [(Story) => <div style={{margin: "0 auto", width: "80%"}}><Story/></div>]
};
const Template = (args) => (
    <>
    <Row {...args} >
        <Col span={2}>
            <Box></Box>
        </Col>
        <Col span={2}>
            <Box2></Box2>
        </Col>
        <Col span={2}>
            <Box></Box>
        </Col>
        <Col span={2}>
            <Box2></Box2>
        </Col>
    </Row>
    <Row {...args} >
        <Col span={2}>
            <Box></Box>
        </Col>
        <Col span={4}>
            <Box2></Box2>
        </Col>
        <Col span={6}>
            <Box></Box>
        </Col>
        <Col span={10}>
            <Box></Box>
        </Col>
    </Row>
</>
)


export const Default = Template.bind({})
Default.args = {
    align : "start",
    justify : "start",
    gutter : [0,0]
}

export const Gutter = Template.bind({})
Gutter.args = {
    align : "start",
    justify : "start",
    gutter : [10,10]
}

export const Justify = Template.bind({})
Justify.args = {
    align : "start",
    justify : "center",
    gutter : [10,10]
}

export const Align = Template.bind({})
Align.args = {
    align : "center",
    justify : "start",
    gutter : [10,10]
}





