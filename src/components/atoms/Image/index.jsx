import React, { memo } from "react"
import styled from "styled-components"

const ImageStyle = styled.img.attrs((props) => ({
    src: props.src
}))`
    min-width : ${props => props.width};
    ${(props) => (props.circle) ? ` border-radius : 100%; ` : null}
    height :  ${props => props.width};
  
`

const Image = ({ src, width, circle }) => (
    <>
        <ImageStyle src={src} width={width} circle={circle}></ImageStyle>
    </>
)

export default memo(Image)