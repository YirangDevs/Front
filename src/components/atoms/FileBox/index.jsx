import React from "react"
import styled from "styled-components"

const File = styled.input.attrs(props=>({type: "file"}))`
    display: none;
`

const Index=({name, accept, onChange})=>(
    <>
        <File name={name} accept={accept} onChange={onChange}></File>
    </>
)

export default Index