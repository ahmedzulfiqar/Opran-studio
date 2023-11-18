import React from "react";

function Footer() {
  return (
    <div className=" py-4 mt-5 border-top border-danger fixed-bottom filter">
      <div className="container">
        <div className="row m-0 justify-content-between">
          <div className="col-8  text-start text-light ">© Opran Studio</div>
          <div className="col text-end">
            <i
              class="fa-brands text-main fs-3 fa-instagram"
              aria-hidden="true"
            ></i>
            <i
              class="fa-brands text-main fs-3 fa-behance-square ps-3"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
