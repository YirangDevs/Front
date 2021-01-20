import React from "react"
import styled from "styled-components"

export const Select = styled.select`
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
                padding : 8px 0px;
            `
        }
    }}
${props => {
        switch (props.theme) {
            case "white":
                return `
            border: none;
            `
            default:
                return `
            border-radius: 5px;
            border-color: #ccd4e0;
            background-color: #f1f3f6;
            `
        }
    }}
    ${props => (props.block) ? `width : 90%;` : null}
    font-size: 1rem;
    color: #707070;
`

const SelectBox = ({ block, theme, size, defaultValue, onChange, onLoad, options, disabled }) => (
    //options = selectBox 목록 DataType = Array

    <>
        <Select block={block} theme={theme} size={size} value={defaultValue} onChange={onChange} disabled={disabled}>
            {options.map((i, index) => <option key={index} defaultValue="" value={i}>{i}</option>)}
        </Select>
    </>
)

export default SelectBox
