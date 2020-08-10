import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Containers/Home"
import About from "./Containers/About"
import Shop from "./Containers/Shop"
import Nav from "./Containers/Nav"

class App extends React.Component {
  state = {};
  render() {
    return (
      <>
      <Nav></Nav>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/shop" component={Shop}></Route>
        </Switch>
        
      </>
    );
  }
}
export default App;
