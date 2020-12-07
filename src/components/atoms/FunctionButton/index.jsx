import React from "react"
import styled from "styled-components"

const Button = styled.input.attrs(props=>({type: "button"}))`
    width : ${props=>props.width};
    height: ${props=>props.height};
    background-color: #ccd4e0;
    font-size: 1.5rem;
    border: 0;
    color: #707070;
    
`

const Index=({width, height, value, onClick})=>(
    <>
        <Button width={width} height={height} value={value} onClick={onClick}>
        </Button>
    </>
)

export default Index