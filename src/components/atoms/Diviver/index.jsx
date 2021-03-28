/** 
 * @Author : chaeeun 
 * @Date : 2021-03-27 09:41:18 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-27 10:11:22
 */

import React from "react";
import styled from "styled-components"

const DividerStyle = styled.div`
border-top-color : ${(props) => (props.color) || ` rgba(0, 0, 0,.06)`};
border-top-style : ${(props) => (props.style) || ` solid`};
border-top-width : ${(props) => (props.borderWidth) || ` 1px`};
margin-top : ${(props) => (props.marginTop) || ` 24px`};
margin-bottom :${(props) => (props.marginBottom) || ` 24px`};
width : ${(props) => (props.width) || ` 100%`};
`



const Divider = ({ color, style, borderWidth, width, marginTop, marginBottom }) => (
    <>
        <DividerStyle color={color} borderWidth={borderWidth} style={style} width={width} marginTop={marginTop} marginBottom={marginBottom} />
    </>
)

export default Divider