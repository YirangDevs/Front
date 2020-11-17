import React from "react"
import styled from "styled-components"

const DateForm = styled.input.attrs((props)=> ({type:"date"}))`
    width: ${props=>props.width};
    height: ${props=>props.height};
    font-size: 1.2rem;
    border-radius: 5px;
    color: #707070;
    border: 1px solid #ccd4e0;
    background-color: #f1f3f6;
`

const DateSelector = ({width, height}) => (

    <>
        <DateForm width={width} height={height}></DateForm>
    </>
)

export default DateSelector