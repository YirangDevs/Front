import React from "react"
import styled, { ThemeProvider } from "styled-components"

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
                padding : 8px 16px;
            `
    }
}}
${
    (props=>{
        switch(props.theme.main){
            case "gray":
                return `
                color: #adadad;
                border-color: #ccd4e0;
                background-color: #f1f3f6;
                `
            default:
                return `
                border: none;
                `
        }
    })
}
    font-size: 1rem;
    border-radius: 5px;
    
`

const SelectBox = ({size, theme, defaultValue, onChange, options}) => (
    //options = selectBox 목록 DataType = Array

    <>
    <ThemeProvider theme={theme}>
        <Select size={size} value={defaultValue} onChange={onChange}>
            {options.map((i, index)=><option key={index} defaultValue="" value={i}>{i}</option>)}
        </Select>
    </ThemeProvider>
    </>
)

export default SelectBox
