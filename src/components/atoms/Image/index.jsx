import React from "react"
import styled from "styled-components"

const ImageStyle = styled.img.attrs((props)=>({
    src: props.src
}))`
    width : ${props=>props.width}%
`

const Image = ({src, width}) => (
    <>
        <ImageStyle src={src} width={width}></ImageStyle>
    </>
)

export default Image