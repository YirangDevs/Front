import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types";

export const DateForm = styled.input.attrs((props)=> ({type:"date"}))`
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
        case "default":
            return `
                padding : 6px 24px;
            `
        default:
            return `
                padding : 6px 10px;
            `
        
    }
}}
    ${props=>(props.border) ? `border-radius: 5px;` : null}
    ${props=>(props.block) ? `width : 90%;` : null}
    border: 1px solid #868789;
    background-color: white;
    font-size: 1rem;
    color: #707070;
    
`

const DateSelector = ({block, size, defaultValue, onChange, border, disabled}) => (

    <>
        <DateForm block={block} size={size} border={border} onChange={onChange} defaultValue={defaultValue} disabled={disabled}></DateForm>
    </>
)

DateSelector.propTypes = {
    block : PropTypes.bool,
    theme : PropTypes.string,
    size : PropTypes.string,
    defaultValue : PropTypes.string,
    onChange : PropTypes.func
}

DateSelector.defaultProps = {
    defaultValue: undefined,
    onClick: undefined,
};

export default DateSelector