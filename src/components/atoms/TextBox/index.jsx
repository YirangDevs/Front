import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

export const Text = styled.input.attrs(props => ({ type: "text" }))`
${props => {
        switch (props.size) {
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
    ${props => (props.border) ? `border-radius: 5px;` : null}
    ${props => (props.block) ? `width : 90%;` : null}
    font-size: 1rem;
    color: #707070;
    border: 1px solid #868789;
    @media screen and (max-width: 992px){
        text-align: center;
    }
    
`

const TextBox = ({ border, size, block, value, onChange, placeholder, disabled }) => (
    <>
        <Text border={border} size={size} block={block} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled}>
        </Text>
    </>
)

TextBox.propTypes = {
    size: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}
TextBox.defaultProps = {
    value: undefined,
    onClick: undefined,
}

export default TextBox