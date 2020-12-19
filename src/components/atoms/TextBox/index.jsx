import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

export const Text = styled.input.attrs(props=>({type: "text"}))`
${props=>{
    switch(props.size){
        case "small":
            return `
                padding : 2px;
            `
        case "large":
            return `
                padding : 12px 20px;
            `
        case "default":
            return `
                padding : 8px 16px;
            `
        default:
            return `
                padding : 8px 10px;
            `
    }
}}
${props=>{
    switch(props.theme){
        case "white":
            return `
                border: none;
            `
        default:
            return`
            border-radius: 5px;
            background-color: #f1f3f6;
            border: 1px solid #ccd4e0;
        `
    }
}}
    ${props=>(props.block) ? `width : 90%;` : null}
    font-size: 1rem;
    color: #707070;
    @media screen and (max-width: 992px){
        text-align: center;
    }
    
`

const TextBox=({theme, size, block, value, onChange, placeholder, disabled})=>(
    <>
        <Text theme={theme} size={size} block={block} value={value||""} onChange={onChange} placeholder={placeholder} disabled={disabled}>
        </Text>
    </>
)

TextBox.propTypes = {
    theme : PropTypes.string,
    size : PropTypes.string,
    value : PropTypes.string,
    onChange : PropTypes.func
}
TextBox.defaultProps = {
    value: undefined,
    onClick: undefined,
}

export default TextBox