import React, {useEffect, memo, useState} from "react"

import styled, {keyframes, css} from "styled-components"
import NotificationPool from "../../../containers/redux/components/NotificationPool/";
import {MdClose} from "react-icons/md";

const intro = keyframes`
  0% {
    opacity : 0;
    transform: translateX(200px);
  }
  100% {
    opacity : 1;
    transform: translateX(0);
  }
`;

const outro = keyframes`
  0% {
    opacity : 1;
    transform: translateY(0);
  }
  100% {
    opacity : 0;
    transform: translateY(-30px);
  }
`;

const CloseBtn = styled.div`
  position : absolute;
  right : 4%;
  top : 15%;
  width : auto;
  height : auto;
  outline : none;
  border : 0;
  background-color : transparent;
  cursor : pointer;
`

const Wrapper = styled.div`
  position: relative;
  background-color: #ffffff;
  padding : 1rem 1.5rem;
  margin : 1rem;
  box-shadow: 0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width : 384px;
  height : auto;
  border : solid 1px rgba(0,0,0,0);
  animation: ${intro} 0.5s forwards;
  @media screen and (max-width: 768px){
    width : 40vw;
    padding : 1.5rem 2rem;
  }
  ${props=>{
      if(props.eliminate) {
        return css`
          animation: ${outro} 0.5s forwards;
        `
      }
  }}
  border-radius: 5px;
  ${props =>{
      switch(props.status){
        case "success":
          return `border-left : solid 6px #22c55e;`
        case "error":
            return `border-left : solid 6px #ef4444;`
        case "warning":
            return `border-left : solid 6px #f97316;`
        case "info":
            return `border-left : solid 6px #3b82f6;`
        default : 
            return;
      }
  }}

`

const Title = styled.div`
  font-size : 1rem;
  display: flex;
  justify-content: start;
  align-items: center;
  height : 1rem;
  width : 100%;
  margin-bottom : 1rem;
  font-weight: 500;
  
`

const ButtonWrapper = styled.div`
  width : 100%;
  margin-top : 0.8rem;
  display : flex;
  justify-content: flex-end;
`

const Button = styled.button`
  border : 0;
  outline : 0;
  cursor : pointer;
  border-radius: 2px;
  color : white;
  padding : 4px 12px;
  background-color : transparent;
  font-weight: bold;
  font-family : Montserrat;
  ${props =>{
    switch(props.status){
      case "success":
        return `color : #22c55e;`
      case "error":
        return `color : #ef4444;`
      case "warning":
        return `color : #f97316;`
      case "info":
        return `color : #3b82f6;`
      default :
        return;
    }
  }}
  
`

const Line = styled.div`
  text-align: start;
  word-break: keep-all;
  font-size : 1rem;
  color : gray;
`

const Notification = ({title, content, uuid, status, duration, button, buttonOnClick}) => {

    const [isDestroy, setIsDestroy] = useState(false)
    const [instanceDuration, setInstanceDuration] = useState(duration)
    const [isHover, setIsHover] = useState(false)
    const [isEliminate, setIsEliminate] = useState(false)
    const lines = content.split("\n")

    useEffect(()=>{
        if(isHover===false && isDestroy===true){
            setIsEliminate(true)
            setTimeout(() => {
                NotificationPool.api.delete(uuid)

            }, 500)
        }
    }, [uuid, isDestroy, isHover])

    useEffect(()=>{
        let time = setTimeout(()=>{
            setIsDestroy(true)

        }, instanceDuration * 1000)
        return ()=>{
            clearTimeout(time)
        }
    }

    , [instanceDuration])
    return (
    <>

        <Wrapper status={status} eliminate={isEliminate} onMouseEnter={()=>{
            setIsHover(true)
        }}
         onMouseLeave={()=>{
             setIsHover(false)
        }}>
            <CloseBtn onClick={()=>{
                setInstanceDuration(0)
                setIsHover(false)
            }
            }><MdClose size={16}/></CloseBtn>
            <Title>{title}</Title>

            {
                lines.map((line, index)=>{
                    return <Line key={index}>{line}</Line>
                })
            }
            {
                button ? <ButtonWrapper><Button status={status} value={button} onClick={()=>{
                    buttonOnClick()
                    setInstanceDuration(0)
                }
                }>{button}</Button></ButtonWrapper> : null
            }
        </Wrapper>
    </>
    )
}

Notification.defaultProps = {
    title : "",
    content : "",
    status : "info",
    duration : 5,
    buttonOnClick : ()=>{}
};

export default memo(Notification)