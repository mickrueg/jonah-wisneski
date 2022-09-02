// import { useContext, useEffect, useState } from 'react';

import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, Link } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Shows from "./components/Shows/Shows";
import Videos from "./components/Videos/Videos";
import Homepage from "./components/Homepage/Homepage";
import Music from "./components/Music/Music";
import Recording from "./components/Recording/Recording";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>   
        <Route path="/*" element={<Homepage />} />
        <Route path="/about" element={<Contact />} />
        <Route path="/music" element={<Music />} />
        <Route path="/live" element={<Shows />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/recording" element={<Recording />} />
      </Routes>
    </div>
  );
}

export default App;
