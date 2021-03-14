import React from "react"
import styled from "styled-components"

const Radio = styled.input.attrs((props) => ({ type: "radio" }))`

`
const RadioGroup = styled.div`
    width:100%;
    display: flex;
    justify-content : ${props => (props.justify) || 'space-around'};
`
const RadioLabel = styled.label`
${props => {
        switch (props.size) {
            case "small":
                return `
                font-size: 0.75rem;
            `
            case "large":
                return `
                font-size: 1.25rem;
            `
            default:
                return `
                font-size: 1rem;
                
            `
        }
    }}
    
    color: #707070;
`


const RadioBox = ({ justify, size, name, onClick, options, checkedValue, disabled }) => (
    //options = selectBox 목록 DataType = Array
    <>
        <RadioGroup justify={justify}>

            {options.map((i, index) =>
                <RadioLabel size={size} key={index}><Radio key={index} value={i} disabled={disabled.indexOf(i) !== -1 ? true : false} defaultChecked={(checkedValue === i) ? true : false} onClick={onClick} name={name} />{i}</RadioLabel>
            )}

        </RadioGroup>
    </>
)

RadioBox.defaultProps = {
    disabled: [],
};

export default RadioBox