import React from "react"
import styled from "styled-components"

const Text = styled.input.attrs(props=>({type: "text"}))`
    width : ${props=>props.width};
    height: ${props=>props.height};
    font-size: 1rem;
    border-radius: 5px;
    color: #707070;
    border: 1px solid #ccd4e0;
    background-color: #f1f3f6;
`

const TextBox=({width, height, defaultValue, onChange, placeholder})=>(
    <>
        <Text width={width} height={height} dafaultValue={defaultValue} onChange={onChange} placeholder={placeholder}>
        </Text>
    </>
)

export default TextBox