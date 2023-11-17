import React from "react";
import Section1 from "../sections/Section1";
import Navbar from "../desginblocks/Navbar";
import Aboutsection from "../sections/Aboutsection";
import Worksection from "../sections/Worksection";
import { Route, Routes, useLocation } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
function Home() {
  return (
    <div className="h-100 p-0">
      <div className="row m-0 h-100 p-0">
        <div className="col-12 p-0 bgimage p-0 m-0 ">
          <Navbar />
          <div className="container   ">
            <Routes>
              <Route path="/" element={<Worksection />} />
              <Route path="/about" element={<Aboutsection />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
