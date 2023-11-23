import React from "react";
import img1 from "../media/2.jpg";
import img2 from "../media/4.png";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import Artdata from "../desginblocks/Artdata";
function Aboutcover() {
  return (
    <motion.div
      className="row  shadow  m-0 mt-3 justify-content-start h-  "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0 }}
    >
      <div className="col-lg-6 col-12 mt-md-5 mt-2  align-self-start">
        <div className="display-4 text-light ">
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            showThumbs={false}
            autoPlay={true}
            stopOnHover={true}
            swipeable={true}
            autoFocus={true}
            className="p-0 m-0 "
          >
            {Artdata.map((i) => {
              return <img src={i.coverimg} alt="" className="img-fluid" />;
            })}
          </Carousel>
        </div>
      </div>
      <div className="col-lg-6 col-12 mt-md-5 mt-4 py-md-5 py-2 px-3 cardfilter ">
        <div className="display-4 text-light mb-3 pt-2 d-md-block d-none ">
          About <span className="text-main">OPRAN STUDIO</span>
          <hr />
        </div>
        <div className="display-6 text-light  d-md-none d-block mb-3 pt-2 ">
          About <span className="text-main">OPRAN STUDIO</span>
          <hr />
        </div>
        <div className="paa  mt-md-5 mt-3 text-light">
          <p className="small fw-lighta">
            Welcome to Opran Studio, where I bring digital dreams to life
            through the lens of 3D artistry. I am FILIPE, the visionary mind
            behind the captivating realms you'll explore within these pixelated
            dimensions.
          </p>
          <div className="fw-bold p-2 ps-0 "> Passion and Purpose </div>
          <p className="small fw-lighta">
            My journey into the world of 3D design began with a profound passion
            for creating immersive environments that transcend the boundaries of
            imagination.
          </p>{" "}
          <div className="fw-bol p-2 ps-0 ">Crafting Virtual Realities</div>
          <p className="small fw-lighta">
            {" "}
            With a background steeped in 3d, I've honed my skills to transform
            concepts into tangible, breathtaking 3D landscapes. From
            architectural visualization to conceptual art, each piece in the
            Opran Studio portfolio is a testament to the limitless possibilities
          </p>
          <br /> FILIPE Founder and Lead Artist, Opran Studio
        </div>
        <div className="d-flex  justify-content-md-start justify-content-start w-100 ps-1 mt-3">
          <button className="btn btn-danger d-md-block d-none rounded-1 text-light  mt-4">
            <i class="fa-brands fa-instagram" aria-hidden="true"></i> Instagram
          </button>
          <button className="btn btn-danger d-md-none d-block rounded-1 text-light btn-sm mt-4">
            <i class="fa-brands fa-instagram" aria-hidden="true"></i> Instagram
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
    </motion.div>
  );
}

export default Aboutcover;
