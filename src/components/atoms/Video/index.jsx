import React, { memo } from "react"
import styled from "styled-components"

const VideoStyle = styled.video`
  border : none;
  outline: none;
  `
const Video = ({ src, width, height }) => (
    <>
        <VideoStyle src={src} width={width} height={height} autoPlay playsInline loop muted>
            <source src={src} type='video/mp4' />
        </VideoStyle>
    </>
)

export default memo(Video)