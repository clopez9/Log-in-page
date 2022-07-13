import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login.js";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element = {<Login/>}/>
      </Routes>
    </Router>
 
  );
}

export default App;
