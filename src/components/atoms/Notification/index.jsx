import React, {useEffect, memo, useState} from "react"

import styled, {keyframes, css} from "styled-components"
import NotificationPool from "../../../containers/redux/components/NotificationPool/";

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

const Wrapper = styled.div`
  background-color: #ffffff;
  padding : 16px 24px;
  font-size : 14px;
  margin : 1rem;
  box-shadow: 0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width : 384px;
  height : auto;
  border : solid 1px rgba(0,0,0,0);
  animation: ${intro} 0.5s forwards;
  ${props=>{
      if(props.destroy) {
        return css`animation: ${outro} 0.5s forwards;`
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
  margin-bottom : 0.8rem;
  font-weight: 500;
  
`

const Notification = ({title, content, uuid, status, duration}) => {

    const [isDestroy, setIsDestroy] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setIsDestroy(true)
            setTimeout(()=>{
                NotificationPool.api.delete(uuid)
            },500)
        }, duration * 1000)
    }, [duration, uuid])
    return (
    <>

        <Wrapper status={status} destroy={isDestroy}>
            <Title>{title}</Title>
            {content}
        </Wrapper>
    </>
    )
}

Notification.defaultProps = {
    title : "",
    content : "",
    status : "info",
    duration : 5
};

export default memo(Notification)