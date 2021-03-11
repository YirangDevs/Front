import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types';

const ButtonComponent = styled.input.attrs(props => ({ type: "button" }))`
    ${props => {
        switch (props.size) {
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
${props => {
        switch (props.types) {
            case "primary":
                return `
                background-color: #000000;
                border: 1px solid #000000;
                border-radius : 3px;
                color : #FFFFFF;
            `
            case "text":
                return `
                background-color: rgba(255,255,255,0);
                border: none;
                outline : 0;
                color : #000000;
            `
            default:
                return `
                background-color: #FFFFFF;
                border: 1px solid #000000;
                border-radius : 3px;
                color : #000000;
            `
        }
    }}
    ${props => (props.block) ? `width : 100%;` : null}
    font-size: 1rem;
    cursor: pointer;
    ${props => props.bold ? `font-weight : bold` : null}
`

const Button = ({ href, size, types, block, value, onClick, bold }) => (
    <>
        <ButtonComponent href={href} size={size} types={types} block={block} value={value} bold={bold} onClick={onClick}>

        </ButtonComponent>
    </>
)

Button.propTypes = {
    href: PropTypes.string,
    types: PropTypes.string,
    size: PropTypes.string,
    block: PropTypes.bool,
    value: PropTypes.string,
    bold: PropTypes.bool,
    onClick: PropTypes.func
}

Button.defaultProps = {
    value: 'Button',
    onClick: undefined,
};

export default Button