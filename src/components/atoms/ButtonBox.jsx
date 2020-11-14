import React from "react"
import styled from "styled-components"

const Button = styled.input.attrs(props=>({type: "button"}))`
    width : ${props=>props.width};
    height: ${props=>props.height};
    background-color: ${props=> props.background};
    font-size: 1.5rem;
    border: ${props=>props.border};
    color: ${props=> props.color};
    margin: ${props => props.margin};
    
`

const ButtonBox=({width, height, background, color, border, margin, value, onClick})=>(
    <>
        <Button width={width} height={height} background={background} color={color} border={border} margin={margin} value={value} onChange={onClick}>
        </Button>
    </>
)

export default ButtonBox