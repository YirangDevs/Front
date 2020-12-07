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
        default:
            return `
                padding : 8px 16px;
            `
    }
}}
    ${
        (props=>{
            switch(props.theme){
                case "default":
                    return `
                        border : none;

                    `
                case "gray":
                    return `
                        background-color: #f1f3f6;
                        border: 1px solid #ccd4e0;
                        color: #707070;
                    `
            }
        })

    }
    font-size: 1.2rem;
    border-radius: 5px;
    
`

const DateSelector = ({size, defaultValue, onChange, theme}) => (

    <>
        <DateForm size={size} theme={theme} onChange={onChange} defaultValue={defaultValue}></DateForm>
    </>
)

DateSelector.propTypes = {
    size : PropTypes.string,
    defaultValue : PropTypes.string,
    onChange : PropTypes.func
}

DateSelector.defaultProps = {
    defaultValue: undefined,
    onClick: undefined,
};

export default DateSelector