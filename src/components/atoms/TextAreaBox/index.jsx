import React from "react"
import styled from "styled-components"

const TextArea = styled.textarea`
    margin-top: 10px;   
    width: 100%;
    height: 100%;
    border: 1px solid #ccd4e0;
    border-radius: 5px;
    resize: none;
    font-size: 1rem;
`

const TextAreaBox = ({ value, placeholder, contentOnChange }) => (
    <>
        <TextArea placeholder={placeholder} value={value} onChange={contentOnChange} />
    </>
)

export default TextAreaBox