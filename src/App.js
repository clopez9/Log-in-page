import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login.js";
import Admin from "./components/admin-page/admin.js"

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element = {<Login/>}/>
      <Route path="/admin" element = {<Admin/>}/>
      </Routes>
    </Router>
 
  );
}

export default App;
