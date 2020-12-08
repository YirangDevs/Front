import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

export const Text = styled.input.attrs(props=>({type: "text"}))`
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

    font-size: 1rem;
    border-radius: 5px;
    background-color: #f1f3f6;
    border: 1px solid #ccd4e0;
    color: #707070;
`

const TextBox=({size, value, onChange, placeholder})=>(
    <>
        <Text size={size} value={value||""} onChange={onChange} placeholder={placeholder}>
        </Text>
    </>
)

TextBox.propTypes = {
    size : PropTypes.string,
    value : PropTypes.string,
    onChange : PropTypes.func
}
TextBox.defaultProps = {
    value: undefined,
    onClick: undefined,
}

export default TextBox