import React from 'react';
import Container from "./components/home/Container"
import LoginRedirect from "./containers/home/LoginRedirect"
import LogoutRedirect from "./containers/home/LogoutRedirect"
import Manage from "./components/manage/Container"
import Create from "./components/create/Container"
import Read from "./components/read/Container"
import Update from "./components/update/Container"
import ReadAllNotice from './components/readAllNotice/Container'
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
        <Route path ="/manage" component={Manage}>
        </Route>
        <Route path ="/create" component={Create}>
        </Route> 
        <Route path ="/read" component={Read}>
        </Route> 
        <Route path ="/update" component={Update}>
        </Route> 
        <Route path ="/ReadAllNotice" component={ReadAllNotice}>
        </Route> 
      </Switch> 
    </BrowserRouter>
    </>
  );
}

export default App;
