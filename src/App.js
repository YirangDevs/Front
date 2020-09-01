import React from 'react';
import './App.css';
import Container from "./components/Container"
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Container></Container>
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
