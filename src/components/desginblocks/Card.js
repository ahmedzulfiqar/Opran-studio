import Tilt from "react-parallax-tilt";
import React from "react";

function Card({ data }) {
  return (
    <div className="col-sm-6 col-12 mt-5  px-md-5 px-0">
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
          <div className="card-body display-6 pt-4 text-center text-light">
            {data.covertext}
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default Card;
