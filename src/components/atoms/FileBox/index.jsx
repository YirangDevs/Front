import React from "react"
import styled from "styled-components"

const Label = styled.label`

font-size: 1rem;

// button default size
padding : 8px 16px;

//button default type
 background-color: #FFFFFF;
 border: 1px solid #000000;
 border-radius : 3px;
 color : #000000;

 cursor: pointer;

display : ${props => (props.display) || 'flex'};
justify-content: center;

${props => (props.block) ? `width : 100%;` : null};
`


const File = styled.input.attrs(props => ({ type: "file" }))`
display : none;

 clip : rect(0,0,0,0);
`


const Index = ({ id, display, block, name, accept, onChange, children }) => (
    <>
        <Label block={block} htmlFor={id} display={display} >{children}</Label>
        <File name={name} id={id} accept={accept} onChange={onChange}></File>
    </>
)

export default Index