import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux"
import store from "./store/store"
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
        padding : 0;
        margin : 0;

      @media (max-width: 1200px) {
        font-size: 14px
      }
      @media (max-width: 1024px) {
        font-size: 10px
      }
      @media (max-width: 768px) {
        font-size: 8px
      }
    }
    
`

ReactDOM.render(
  
    <React.StrictMode>
     <GlobalStyle></GlobalStyle>
        <Provider store={store}>
            <App />
        </Provider>


    </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
