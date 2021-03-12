import React from "react";

import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";

import { HashRouter as Router, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
};

export default App;
