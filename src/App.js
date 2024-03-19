import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Projects from "./components/pages/Projects";
import Certificates from "./components/pages/Certificates";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/projects" exact Component={Projects} />
          <Route path="/certificates" exact Component={Certificates} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
