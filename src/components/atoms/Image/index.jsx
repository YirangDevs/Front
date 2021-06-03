import React, { memo } from "react"
import styled from "styled-components"

const ImageStyle = styled.img.attrs((props) => ({
    src: props.src
}))`
    // width : ${props => props.width};
    ${(props) => (props.circle) ? ` border-radius : 50%; ` : null}
    height :  ${props => props.height || props.width} ;
    ${(props) => (props.cursor) ? ` cursor : ${props.cursor}` : null}
    min-width : ${props => props.width};
    ${(props) => (props.circle) ? ` border-radius : 100%; ` : null}
    border : ${props => (props.border) || null};
  
`

const Image = ({ src, width, circle, height, cursor, border }) => (
    <>
        <ImageStyle src={src} width={width} cursor={cursor} border={border}
            height={height} circle={circle} ></ImageStyle>
    </>
)

export default memo(Image)