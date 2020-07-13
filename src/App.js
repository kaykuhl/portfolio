import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Footer from "./components/Footer"

function App() {


  return (
    <Router>
      <div>
        <NavTabs />
        <Route path="/" component={Home} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;