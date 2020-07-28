import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Recruit from "./pages/Recruit";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Recruit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
