import React, {memo} from "react"
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
    border: 1px solid #868789;
    background-color: white;
    font-size: 1rem;
    color: #707070;
    ${props => (props.background) ? `background-color: #f5f5f5;` : `background-color: white;`}
    ${props => (props.border) ? `border-radius: 5px;` : null}
    ${props => (props.block) ? `width : 90%;` : null}

    
`

const SelectBox = ({ background, block, border, size, defaultValue, onChange, onLoad, options, disabled, value}) => (
    //options = selectBox 목록 DataType = Array

    <>
        <Select background={background} block={block} border={border} size={size} defaultValue={defaultValue} value={value} onChange={onChange} disabled={disabled}>
            {options.map((i, index) => <option key={index} defaultValue="" value={i}>{i}</option>)}
        </Select>
    </>
)

export default memo(SelectBox)
