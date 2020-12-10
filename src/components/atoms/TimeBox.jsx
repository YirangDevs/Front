import React from "react"
import styled from "styled-components"

const Time = styled.input.attrs(props=>({type: "time"}))`
width : ${props=>props.width};
    border: none;
`

const TimeBox=({width})=>(
    <>
        <Time width={width}></Time>
    </>
)

export default TimeBox