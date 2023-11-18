import React, { useEffect } from "react";
import Navbar from "../desginblocks/Navbar";
import Aboutsection from "../sections/Aboutsection";
import Worksection from "../sections/Worksection";
import { Route, Routes, useLocation } from "react-router-dom";
import Artdata from "../desginblocks/Artdata";
import Projectpage from "./Projectpage";
import Footer from "../desginblocks/Footer";
function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="h-100 p-0">
      <div className="row m-0 h-100 p-0">
        <div className="col-12 p-0 bgimage p-0 m-0 ">
          <Navbar />
          <div className=" mb-5 py-5  ">
            <Routes>
              <Route path="/" element={<Worksection />} />
              <Route path="/about" element={<Aboutsection />} />
              {Artdata.map((data) => {
                return (
                  <Route
                    path={`/${data.covertext}`}
                    element={<Projectpage />}
                  />
                );
              })}
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
