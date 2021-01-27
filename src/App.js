import React, {useEffect, useState} from 'react';
import NotificationPool from "./containers/redux/components/NotificationPool/";
import {createGlobalStyle} from "styled-components"
import YirangRouter from "./router";
import run from "./init/start"


const GlobalStyle = createGlobalStyle`
  html, body {
    scroll-behavior: smooth;
  }
`


function App() {
  const [isRenew, setIsRenew] = useState(false) //새로 고침 이후 일시적으로 role이 Guest가 되는 증상 해결을 위한 상태
//단 한번만 실행
  useEffect(()=>{
    run().then((status)=>{
      if(status){
        setIsRenew(true)
      }
    })
  }, [])

  return (isRenew) ? (
    <>
    <GlobalStyle/>
    <NotificationPool/>
    <YirangRouter/>
    </>
  ) : null;
}

export default App;
