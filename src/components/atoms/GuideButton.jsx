import React from "react"
import styled from "styled-components"

export const Button = styled.input.attrs(props=>({type: "button"}))`
    width: 90%;
    padding: 0.8rem;
    border-radius: 1px;
    border: solid 1px #ccd4e0;
    font-family: NotoSansCJKKR;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    color: #707070;
    background-color: #f1f3f6;
    box-sizing: border-box;
    white-space: nowrap;
    cursor: pointer;
    position: inherit;
`

const GuideButton=({value, onClick})=>(
    <>
        <Button value={value} onClick={onClick}/>
    </>
)

export default GuideButton