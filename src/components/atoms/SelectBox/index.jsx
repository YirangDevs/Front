import React from "react"
import styled from "styled-components"

export const Select = styled.select`
${props=>{
    switch(props.size){
        case "small":
            return `
                padding : 2px 8px;
            `
        case "large":
            return `
                padding : 12px 20px;
            `
        default:
            return `
                padding : 8px 12px;
            `
    }
}}
    font-size: 1rem;
    border-radius: 5px;
    color: #adadad;
    border-color: #ccd4e0;
    background-color: #f1f3f6;
`

const SelectBox = ({size, defaultValue, onChange, options}) => (
    //options = selectBox 목록 DataType = Array

    <>
        <Select size={size} value={defaultValue} onChange={onChange}>
            {options.map((i, index)=><option key={index} defaultValue="" value={i}>{i}</option>)}
        </Select>
    </>
)

export default SelectBox
