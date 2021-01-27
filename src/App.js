import React, {useEffect} from 'react';
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
//단 한번만 실행
  useEffect(()=>{
    run()
  }, [])

  return (
    <>
    <GlobalStyle/>
    <NotificationPool/>
    <YirangRouter/>
    </>
  );
}

export default App;
