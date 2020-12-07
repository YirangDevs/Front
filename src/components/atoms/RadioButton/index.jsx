import React from "react"
import styled from "styled-components"

const Radio = styled.input.attrs((props)=> ({type:"radio"}))`

`


const Index = ({name, defaultValue, onClick,value, text}) => (
    //options = selectBox 목록 DataType = Array

    <>
        <Radio onClick={onClick} name={name} value={value} checked={defaultValue}></Radio>{text}
    </>
)

export default Index