import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { TypeAnimation } from "react-type-animation";
import Spline from '@splinetool/react-spline'
function Carouselsec() {
  return (
    <div className="row m-0 justify-content-start h-100  ">
      <div className="col-md-7 col-12  pt-0 align-self-center  text-md-start text-center ">
        <div className="mb-3 sd text-light text-center  border-main bg-primarys btn mx-auto   rounded-1 py-2">
          <TypeAnimation
            className="fs-6"
            sequence={[
              "I am a 3d Enviorment Desginer",
              2000,
              "I am a Blender Expert",
              2000,
              "I am a From Slovenia",
              2000,
              "Contact for commission work",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <div className="display-2 d-md-block d-none text-light mb-2 align-self-center">
          Opran Studio Crafting <span className="text-main"> 3D</span> Realities
        </div>{" "}
        <div className="display-2 d-md-none d-block text-light text-center mb-2 align-self-center">
          Opran Studio Crafting <span className="text-main"> 3D</span> Realities
        </div>
        <div className="d-flex  justify-content-md-start justify-content-center w-100">
          <button className="btn btn-danger d-md-block d-none rounded-1 text-light btn-lg mt-4">
            <i class="fa-brands fa-instagram" aria-hidden="true"></i> Instagram
          </button>
          <button className="btn btn-danger d-md-none d-block rounded-1 text-light btn-sm mt-4">
            <i class="fa-brands fa-instagram" aria-hidden="true"></i> Instagram
          </button>
          <button className="btn btn-outline-danger d-md-block d-none btn-lg rounded-1 text-light  mt-4  ms-3">
            <i class="fa-brands fa-behance-square" aria-hidden="true"></i>{" "}
            Behance
          </button>
          <button className="btn btn-outline-danger d-md-none d-block  btn-sm rounded-1 text-light  mt-4  ms-2">
            <i class="fa-brands fa-behance-square" aria-hidden="true"></i>{" "}
            Behance
          </button>
        </div>
      </div>
      <div className="col-5 h-100 d-md-block d-none align-self-center ">
      <Spline scene="https://prod.spline.design/5q3nUvpZlKDcC4MZ/scene.splinecode" />
      </div>
     
    </div>
  );
}

export default Carouselsec;
