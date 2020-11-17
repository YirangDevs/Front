import React from "react"
import styled from "styled-components"

const RadioButton = styled.input.attrs((props)=> ({type:"radio"}))`
    display: none;
    border:1px solid #dfdfdf;    
    width: auto;
    height:2rem;
    font-weight:500;
    cursor:pointer;
`



const RadioButtonRect = ({name, value}) => (
    //options = selectBox 목록 DataType = Array

    <>
        <RadioButton name={name} value={value}></RadioButton>
    </>
)

export default RadioButtonRect