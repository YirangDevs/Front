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
    ${props => (props.border) ? `border : none;` : null}
    ${props => (props.radius) ? `border-radius: 5px;` : null}
    ${props => (props.block) ? `width : 90%;` : null}
    font-size: 1rem;
    color: #707070;
    border : none ;
    
    &:focus{
        outline : none;
    }

    @media screen and (max-width: 992px){
        text-align: center;
    }
    
`

/**
 * 
 * @param border 테두리 유무
 * @param radius radius 추가 
 * @param size 크기 
 * @param block 가로크기 부모로 조정
 * @param value 값
 * @param onChange onChange
 * @param placeholder 값입력 전 입력을 돕기위한 힌트
 * @param disabled textbox 비활성화
 */
const TextBox = ({ border, radius, size, block, value, onChange, placeholder, disabled }) => (
    <>
        <Text border={border} radius={radius} size={size} block={block} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled}>
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