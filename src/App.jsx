import './App.css';
import Cources from './pages/Courses';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";








import { useState } from "react";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="courses" element={<Cources />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )





  

 
}

export default App;
