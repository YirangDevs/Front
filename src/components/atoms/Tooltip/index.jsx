import React, {createRef, memo, useEffect, useState} from "react";
import styled from "styled-components"

const Wrapper = styled.div`
  position : relative;
  width : auto;
  height : auto;
  
  &:hover{
    & > div:first-child{
      visibility: visible;
      opacity : 0.8;
      pointer-events: visible;
    }
  }
`

const ToolTipComponent = styled.div`
  display : flex;
  flex-direction: column;
  justify-content: center;
  position : absolute;
  background : rgba(0,0,0,0.4);
  color : white;
  padding : 8px;
  opacity : 0;
  visibility: hidden;
  pointer-events: none;
  transition : all 0.2s ease;
  font-size : 14px;
  border-radius: 3px;
  ${props=>props.width ? `width : `+14 * props.width+`px;` : null}
  ${(props)=>{
    switch(props.position){
      case 'top':
        return `
        bottom : 100%; left : ` +props.offset.width+`px;
        margin-bottom : `+props.margin+`px;
        ` 
      case 'bottom':
        return `
        top : 100%; left : ` +props.offset.width+`px;
        margin-top : `+props.margin+`px;
        ` 
      case 'right':
        return `
        left : 100%; top : ` +props.offset.height+`px;
        margin-left : `+props.margin+`px;
        ` 
      case 'left':
        return `
        right : 100%; top : ` +props.offset.height+`px;
        margin-right : `+props.margin+`px;
        ` 
      default :
        return
    }
  }}
`

const Line = styled.div`
  text-align: start;
`

const ToolTip = ({children, position, content}) => {
  console.log(content)

  const parentRef = createRef();
  const childRef = createRef();
  const [offset, setOffset] = useState({})
  const margin = 5;

  const lines = content.split("\n")
  const length = Math.max.apply(null,lines.map((i)=>{
    const spaceCount = i.match(/ /g)!==null ? i.match(/ /g).length : 0;
    return i.length - spaceCount/2
  }))


  useEffect(()=>{
    setOffset({
      width : parentRef.current.clientWidth/2 - childRef.current.clientWidth/2,
      height : parentRef.current.clientHeight/2 - childRef.current.clientHeight/2
    })
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Wrapper ref={parentRef}>
        <ToolTipComponent ref={childRef} offset={offset} position={position} margin={margin} width={length}>{
          lines.map((line, index)=>{
            return <Line key={index}>{line}</Line>
          })
        }</ToolTipComponent>
        {children}
      </Wrapper>

    </>
  )
};

ToolTip.defaultProps = {
  position : "top",
  content : "",
};

export default memo(ToolTip)