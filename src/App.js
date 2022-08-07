// import { useContext, useEffect, useState } from 'react';

import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, Link } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Shows from "./components/Shows/Shows";
import Videos from "./components/Videos/Videos";
import Music2 from "./components/Music2/Music2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>   
        <Route path="/*" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/music" element={<Music />} /> */}
        <Route path="/music2" element={<Music2 />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </div>
  );
}

export default App;
