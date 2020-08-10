import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// class App extends React.Component {
//   render() {
//     return <h1>Hello World!</h1>;
//   }
// }


ReactDOM.render(
  <Provider store = { store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
