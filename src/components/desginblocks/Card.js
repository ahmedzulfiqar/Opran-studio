import Tilt from "react-parallax-tilt";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Card({ data }) {
  return (
    <motion.div
      className="col-md-6  col-12 mt-md-5 mt-4 py-0  px-md-5 px-0"
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0 }}
      variants={{
        visible: { opacity: 1, translateX: "0px" },
        hidden: {
          opacity: 0,
          translateX: "-30px",
        },
      }}
    >
      <Link to={data.covertext} state={data}>
        <Tilt tiltReverse={true} tiltMaxAngleX={7} tiltMaxAngleY={7}>
          <div className="card bg-transparent p-0 border-0  fd shadow ">
            <div className="card-image">
              <div class="card text-bg-dark  border-0 ">
                <img src={data.coverimg} class="card-img" alt="..." />
                <div class="card-img-overlay  d-flex flex-column justify-content-center align-items-center">
                  <i
                    class="fa-regular text-main fa-play-circle display-1"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
            <div className="card-body display-6 pt-4 text-center text-light rip">
              {data.covertext}
            </div>
          </div>
        </Tilt>
      </Link>
    </motion.div>
  );
}

export default Card;
