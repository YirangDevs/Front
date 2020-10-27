import React from 'react';
import Container from "./components/home/Container"
import LoginRedirect from "./containers/home/LoginRedirect"
import LogoutRedirect from "./containers/home/LogoutRedirect"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Seniors from "./components/senior/Container"


function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Container}>
        </Route>
        <Route path="/login" component={LoginRedirect}>
        </Route>
        <Route path="/logout" component={LogoutRedirect}>
        </Route>
        <Route path="/seniors" component={Seniors}>

        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
