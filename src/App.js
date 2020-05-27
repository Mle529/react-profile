import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from "./pages/About/About.js";
import Portfolio from "./pages/Portfolio/Portfolio.js";

function App() {

  return (
    <Router>
      <div className="App">
        <Route exact path={["/", "/about"]} component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;
