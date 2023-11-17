import React from "react";
import img1 from "../media/2.jpg";
import Tilt from "react-parallax-tilt";
function Aboutcover() {
  return (
    <>
      <div className="row  shadow  m-0 mt-5 pt-5 justify-content-start h-  ">
        <div className="col-lg-6 col-12 mt-5  align-self-start">
          <Tilt tiltReverse={true} tiltMaxAngleX={7} tiltMaxAngleY={7}>
            {" "}
            <div className="display-4 text-light">
              <img src={img1} alt="" className="img-fluid" />
            </div>
          </Tilt>
        </div>
        <div className="col-lg-6 col-12 mt-5 py-5 px-3 cardfilter ">
          <div className="display-4 text-light mb-3 pt-2 ">
            About <span className="text-main">OPRAN STUDIO</span>
            <hr />
          </div>
          <div className="paa  mt-5 text-light">
            <p className="small fw-lighta">
              Welcome to Opran Studio, where I bring digital dreams to life
              through the lens of 3D artistry. I am FILIPE, the visionary mind
              behind the captivating realms you'll explore within these
              pixelated dimensions.
            </p>
            <div className="fw-bold p-2 ps-0 "> Passion and Purpose </div>
            <p className="small fw-lighta">
              My journey into the world of 3D design began with a profound
              passion for creating immersive environments that transcend the
              boundaries of imagination.
            </p>{" "}
            <div className="fw-bol p-2 ps-0 ">Crafting Virtual Realities</div>
            <p className="small fw-lighta">
              {" "}
              With a background steeped in 3d, I've honed my skills to transform
              concepts into tangible, breathtaking 3D landscapes. From
              architectural visualization to conceptual art, each piece in the
              Opran Studio portfolio is a testament to the limitless
              possibilities
            </p>
            <br /> FILIPE Founder and Lead Artist, Opran Studio
          </div>
          <div className="d-flex  justify-content-md-start justify-content-center w-100 ps-1 mt-3">
            <button className="btn btn-danger d-md-block d-none rounded-1 text-light  mt-4">
              <i class="fa-brands fa-instagram" aria-hidden="true"></i>{" "}
              Instagram
            </button>
            <button className="btn btn-danger d-md-none d-block rounded-1 text-light btn-sm mt-4">
              <i class="fa-brands fa-instagram" aria-hidden="true"></i>{" "}
              Instagram
            </button>
            <button className="btn btn-outline-danger d-md-block d-none  rounded-1 text-light  mt-4  ms-2">
              <i class="fa-brands fa-behance-square" aria-hidden="true"></i>{" "}
              Behance
            </button>
            <button className="btn btn-outline-danger d-md-none d-block  btn-sm rounded-1 text-light  mt-4  ms-2">
              <i class="fa-brands fa-behance-square" aria-hidden="true"></i>{" "}
              Behance
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutcover;
