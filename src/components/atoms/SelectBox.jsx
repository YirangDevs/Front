import React from "react"
import styled from "styled-components"

const Select = styled.select`
    width : ${props=>props.width};
    height: ${props=>props.height};
    font-size: 1rem;
    border-radius: 5px;
    color: #adadad;
    border-color: #ccd4e0;
    background-color: #f1f3f6;
    padding-left:10px;
    margin-bottom: 10px;
    
`

const SelectBox = ({width,height,defaultValue, onChange, options}) => (
    //options = selectBox 목록 DataType = Array

    <>
        <Select width={width} height={height}defaultValue={defaultValue} onChange={onChange}>
            {options.map((i, index)=><option key={index} value={new String(i)}>{i}</option>)}
        </Select>
    </>
)

export default SelectBox