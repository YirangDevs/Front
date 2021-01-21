import React from "react"
import styled from "styled-components"

const Radio = styled.input.attrs((props)=> ({type:"radio"}))`

`
const RadioGroup = styled.div`
`
const RadioLabel = styled.label`
${props=>{
    switch(props.size){
        case "small":
            return `
                font-size: 12px;
            `
        case "large":
            return `
                font-size: 20px;
            `
        default:
            return `
                font-size: 16px;
                
            `
    }
}}
    
    color: #707070;
`


const RadioBox = ({size, name, defaultValue, onClick, options}, ref) => (
    //options = selectBox 목록 DataType = Array
    <>
    <RadioGroup>
        
        {options.map((i)=>
        <RadioLabel size={size}><Radio value={i} defaultValue={defaultValue===i} onClick={onClick} name={name}/>{i}</RadioLabel>
        )}
        
    </RadioGroup>
    </>
)

export default RadioBox