import React, {useEffect} from 'react';
import Home from "./pages/Home/index"
import Login from "./pages/Login/"
import Logout from "./pages/Logout"
import Manage from "./pages/Manage/index"
import Create from "./pages/Create/index"
import UserAuthority from "./pages/UserAuthority"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Seniors from "./pages/Seniors/index"
import {createGlobalStyle} from "styled-components"
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
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}>
        </Route>
        <Route path="/logout" component={Logout}>
        </Route>
        <Route path="/seniors" component={Seniors}>

        </Route>
        <Route path ="/manage" component={Manage}>
        </Route>
        <Route path ="/create" component={Create}>
        </Route> 
        <Route path="/userauthority" component={UserAuthority}>
        </Route>

        <Route exact path="/" component={Home}>
        </Route>
      </Switch> 
    </BrowserRouter>
    </>
  );
}

export default App;
