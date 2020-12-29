import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types";

export const TimeForm = styled.input.attrs((props)=> ({type:"time"}))`
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
        case "default":
            return `
                padding : 6px 24px;
            `
        default:
            return ``
        
    }
}}
${props=>{
    switch(props.theme){
        case "white":
            return`
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
    font-size: 1rem;
    color: #707070;
    
`

const TimeSelector = ({size, defaultValue, onChange, theme}) => (

    <>
        <TimeForm size={size} theme={theme} onChange={onChange} defaultValue={defaultValue}></TimeForm>
    </>
)

TimeSelector.propTypes = {
    theme : PropTypes.string,
    size : PropTypes.string,
    defaultValue : PropTypes.string,
    onChange : PropTypes.func
}

TimeSelector.defaultProps = {
    defaultValue: undefined,
    onClick: undefined,
};

export default TimeSelector