import React from 'react';
import Container from "./components/Container"
import LoginRedirect from "./containers/LoginRedirect"
import LogoutRedirect from "./containers/LogoutRedirect"
import {BrowserRouter, Switch, Route} from "react-router-dom"


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
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
