// import { useContext, useEffect, useState } from 'react';

import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, Link } from "react-router-dom";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>   
        <Route path="/*" element={<Music />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
