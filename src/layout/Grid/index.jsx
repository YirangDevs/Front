import React from "react"
import Row from "./Row/index"
import Col from "./Column"
import styled from "styled-components"


const Box = styled.div`
    background: #0092ff;
    width: 100%;
`
const Grid = () => {
    return (
        <>
            <Row justify="center" align="center">
                <Col span={2}>
                    <Box>span 2</Box>
                </Col>
                <Col span={4}>
                    <Box>span 4</Box>
                </Col>
                <Col span={8} xs={10}>
                    <Box>span 4</Box>
                </Col>

            </Row>
        </>
    )
}

export default Grid