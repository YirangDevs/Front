import React from "react"
import styled from "styled-components"

const Date = styled.input.attrs(props=>({type: "date"}))`
    width : ${props=>props.width};
    border: none;
`

const DateBox=({width})=>(
    <>
        <Date width={width}></Date>
    </>
)

export default DateBox