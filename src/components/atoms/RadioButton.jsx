import React from "react"
import styled from "styled-components"

const Radio = styled.input.attrs((props)=> ({type:"radio"}))`

`


const RadioButton = ({name, value, onClick}) => (
    //options = selectBox 목록 DataType = Array

    <>
        <Radio onClick={onClick} name={name} value={value}></Radio>
    </>
)

export default RadioButton