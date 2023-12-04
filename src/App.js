import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Products from './routes/Products';
function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/"exact={true} element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products" element={<Products/>}/>
        </Routes>
    </div>

   
  );
}

export default App;
