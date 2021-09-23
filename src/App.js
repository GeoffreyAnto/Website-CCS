import "./App.css";
import React from "react";
import Home from "./screens/Home/Home";
import Detail from "./screens/Detail/Detail";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
