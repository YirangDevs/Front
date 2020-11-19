import React from "react"
import styled from "styled-components"

export const RadioButton = styled.input.attrs((props)=> ({type:"radio"}))`
    border:1px solid #dfdfdf;    
    width: auto;
    height:2rem;
    font-weight:500;
    cursor:pointer;
`




const RadioButtonRect = ({name, defaultValue, text, onClick}) => (
    //options = selectBox 목록 DataType = Array

    <>
        <RadioButton name={name} defaultValue={defaultValue} onClick={onClick}></RadioButton>{text}

    </>
)

export default RadioButtonRect