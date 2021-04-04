import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types";

export const DateForm = styled.input.attrs((props) => ({ type: "date" }))`

border : none;
background-color: white;
font-size: 1rem;
color: #707070;

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
    ${props => (props.border) ? 'border: 1px solid #868789;' : null}
    ${props => (props.radius) ? `border-radius: 5px;` : null}
    ${props => (props.block) ? `width : 90%;` : null}


    
`
/**
 * @param block 가로크기 부모로 조정
 * @param size 크기 
 * @param defaultValue 값
 * @param onChange onChange
 * @param border 테두리 없애고싶을때
 * @param radius radius 추가 
 * @param disabled DateSelector 비활성화
 */
const DateSelector = ({ min, max, block, size, defaultValue, onChange, border, radius, disabled }) => (

    <>
        <DateForm min={min} max={max} block={block} size={size} border={border} radius={radius} onChange={onChange} defaultValue={defaultValue} disabled={disabled}></DateForm>
    </>
)

DateSelector.propTypes = {
    block: PropTypes.bool,
    theme: PropTypes.string,
    size: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func
}

DateSelector.defaultProps = {
    defaultValue: undefined,
    onClick: undefined,
};

export default DateSelector