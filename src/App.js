import React from 'react';
import Container from "./components/Container"
import Redirect from "./components/Redirect"
import {BrowserRouter, Switch, Route} from "react-router-dom"


function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Container}>
        </Route>
        <Route path="/login" component={Redirect}>
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
