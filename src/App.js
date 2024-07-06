import './App.css';
import React from 'react';
import logo from './Assets/logo.png';
import Footer from "./components/Footer.js";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Gallery from './components/Gallery.js';
import Menus from './components/Menus.js';
import Contact from './components/Contact.js';
import Chef from './components/Chef.js';

function App() {
  return (
  <div>
    <Router>
        <nav>
          <Link to="/" className="link">The Chef</Link>
          <Link to="/gallery" className="link">Gallery</Link>
          <img className="logo"src={logo} width="800px" alt="logo" />
          <Link to="/menus" className="link">Menus</Link>
          <Link to="/contact" className="link">Contact Us</Link>
        </nav>



        <Routes>
          <Route path="/" element={<Chef />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/menus" element={<Menus/>} />
          <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Router>
        <hr />
        <Footer />
    </div>
    
  );
}

export default App;
