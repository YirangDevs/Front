import React from "react"
import styled from "styled-components"

const Check = styled.input.attrs((props)=> ({type:"checkbox"}))`

`
const CheckBoxGroup = styled.div`
`
const CheckBoxLabel = styled.label`
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


const CheckBox = ({size, defaultChecked, options}) => (

    //options = selectBox 목록 DataType = Array
    <>
    <CheckBoxGroup>
        {options.map((i)=>
        <CheckBoxLabel size={size}><Check value={i} checked={(defaultChecked.includes(i))? "checked": null} />{i}</CheckBoxLabel>
        )}
        
    </CheckBoxGroup>
    </>
)

export default CheckBox