import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
function Projectpage() {
  const location = useLocation();
  const [data, setdata] = useState(location.state);
  console.log(location.state);
  return (
    <motion.div
      className="container   mt-md-5  py-md-3 mt-3 hefg p-0 "
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0 }}
    >
      <div className="row m-0 ">
        <div className="col-12 p-0  hero">
          <div className="">
            <Tilt tiltReverse={true} tiltMaxAngleX={7} tiltMaxAngleY={7}>
              <div class="card  text-bg-dark  bg-transparent border-0 ">
                <img src={data.coverimg} class="hero " alt="..." />
                <div class="card-img-overlay  d-flex flex-column justify-content-center display-1 align-items-center">
                  {data.covertext}
                  <div className="display-6 fw-lighta">
                    {data.headingsubtext}
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        </div>{" "}
        <div className="col-12 mt-5 pt-3 px-md-5 d-md-block d-none">
          <div className="row m-0 ">
            <div className="col-md-3 col-12 ">
              <div className="fs-5 text-main text-uppercase">Project Name</div>
              <div className="fs-5 text-light fw-lighta">
                - {data.covertext}
              </div>
              <div className="fs-5 text-main text-uppercase mt-4">Date</div>
              <div className="fs-5 text-light fw-lighta">- {data.date}</div>
              <div className="fs-5 text-main text-uppercase mt-4">My Roles</div>
              <div className="fs-5 text-light fw-lighta">
                {data.roles.map((i) => {
                  return <li className="fw-lighta">- {i}</li>;
                })}
              </div>
              <div className="fs-5 text-main text-uppercase mt-4">
                Collabraters
              </div>
              <div className="fs-5 text-light fw-lighta">- None</div>
            </div>
            <div className="col-md-9 col-12 mt-md-0 mt-5 ps-md-4 ">
              <div className="fs-3 text-main text-uppercase">over view</div>
              <div className="fs-5 text-light fw-lighta ">
                <>
                  <p className="fs-4 mt-3">{data.overview[0].heading}</p>
                  <p className="fw-lighta mb-0">- {data.overview[0].para}</p>
                  <p className="fs-4 mt-3 text-danger align-self-center">
                    - See This Project On Instagram
                  </p>
                </>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-5 pt-3 px-md-5 d-md-none d-block">
          <div className="row m-0 ">
            <div className="col-md-3 col-12 ">
              <div className="fs-5 text-main text-uppercase">Project Name</div>
              <div className="fs-5 text-light fw-lighta">
                - {data.covertext}
              </div>
              <div className="fs-5 text-main text-uppercase mt-4">Date</div>
              <div className="fs-5 text-light fw-lighta small">
                - {data.date}
              </div>
              <div className="fs-5 text-main text-uppercase mt-4">My Roles</div>
              <div className="fs-5 text-light fw-lighta small">
                {data.roles.map((i) => {
                  return <li className="fw-lighta small">- {i}</li>;
                })}
              </div>
              <div className="fs-5 text-main text-uppercase mt-4">
                Collabraters
              </div>
              <div className="fs-5 text-light fw-lighta small">- None</div>
            </div>
            <div className="col-md-9 col-12 mt-md-0 mt-5 ps-md-4  pe-0">
              <div className="fs-3 text-main text-uppercase">over view</div>
              <div className="fs-5 text-light fw-lighta ">
                <>
                  <p className="fs-4 mt-3 small">{data.overview[0].heading}</p>
                  <p className="fw-lighta mb-0  small">
                    - {data.overview[0].para}
                  </p>
                  <p className="fs-4 mt-3 text-danger align-self-center small">
                    - See This Project On Instagram
                  </p>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projectpage;
