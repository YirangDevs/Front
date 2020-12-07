import React from "react"
import styled from "styled-components"

export const DateForm = styled.input.attrs((props)=> ({type:"date"}))`
    ${
        (props=>{
            switch(props.theme){
                case "default":
                    return `
                        border : none;

                    `
                case "gray":
                    return `
                        background
                    `
            }
        })

    }
    width: ${props=>props.width};
    height: ${props=>props.height};
    font-size: 1.2rem;
    border-radius: 5px;
    color: #707070;
    
`

const DateSelector = ({width, height, defaultValue, onChange, theme}) => (

    <>
        <DateForm onChange={onChange} defaultValue={defaultValue}width={width} height={height}></DateForm>
    </>
)

export default DateSelector