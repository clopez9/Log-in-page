import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login";
import Signin from "./components/signin";
import Dashboard from "./components/dashboard";
import Quiz from "./components/quiz";
import Questions from "./components/questions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Login/>}/>
        <Route path="/signin" element = {<Signin/>}/>
        <Route path="/dashboard" element = {<Dashboard/>}/>
        <Route path="/quiz" element = {<Quiz/>}/>
        <Route path="/questions" element = {<Questions/>}/>
      </Routes>
    </Router>
 
  );
}

export default App;
