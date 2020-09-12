import React, {Component} from 'react';
import KommunicateChat from './chat';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";

class App extends Component {
  render() {
  return (
    <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",          
          backgroundColor: "white",
          padding: 20
        }}
      >
      <KommunicateChat/>
    <h1>COVID Chat</h1>
    <HashRouter>
      <div>
    <ul className="header">
    <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
          </div>
        </div>
          </HashRouter>
  </div>
  );
}
}

export default App;
