import React, { Component } from "react";
import KommunicateChat from "./chat";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <div>
        <KommunicateChat />
        <HashRouter>
          <div>
          <h1>COVID CHAT</h1>            
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route exact path="/" component={Stuff}/>
              <Route exact path="/" component={Contact}/>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
