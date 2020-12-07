import React from "react"
import styled from "styled-components"

export const Select = styled.select`
    width : ${props=>props.width};
    height: ${props=>props.height};
    font-size: 1rem;
    border-radius: 5px;
    color: #adadad;
    border-color: #ccd4e0;
    background-color: #f1f3f6;
    
`

const Index = ({width,height,defaultValue, onChange, options}) => (
    //options = selectBox 목록 DataType = Array

    <>
        <Select width={width} height={height}value={defaultValue} onChange={onChange}>
            {options.map((i, index)=><option key={index} defaultValue="" value={i}>{i}</option>)}
        </Select>
    </>
)

export default Index