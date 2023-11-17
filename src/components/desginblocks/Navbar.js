import React from "react";
import logo from "../media/370258937_1000446534347484_6738224902469943689_n-removebg-preview.png";
import { Link } from "react-router-dom";
function Navbar() {
  const list = [
    { name: "Work", route: "/" },
    { name: "About Me", route: "/about" },
    { name: "Contact Me", route: "/contact" },
  ];
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-primarys  ">
        <div class="container-fluid px-5">
          <a class="fs-2 text-main fw-bolder d-block" href="#">
            <img src={logo} alt="" className="img-fluid mynavbarimg" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <i class="fa fa-bars text-main" aria-hidden="true"></i>
          </button>
          <div class="collapse navbar-collapse mt-lg-0 mt-3" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              {list.map((i) => {
                return (
                  <Link class="nav-item fw-lighter fs-5 mx-2" to={i.route}>
                    <a
                      class="nav-link text-danger active  dss rounded-2"
                      aria-current="page"
                      href={`#${i.name}`}
                    >
                      {i.name}
                    </a>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      <div
        class="offcanvas offcanvas-start  py-3 p-0 text-light bg-primarys"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header p-0 pe-4">
          <a class="fs-2 text-main fw-bolder d-block" href="#">
            <img src={logo} alt="" className="img-fluid mynavbarimg" />
          </a>

          <i
            class="fa fa-times display-6 text-main"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            aria-hidden="true"
          ></i>
        </div>
        <div class="offcanvas-body px-0  ps-2 mt-0">
          <ul class="navbar-nav justify-content-end flex-grow-1 sa">
            {list.map((item) => {
              return (
                <li class={`text-light mynavitem fw-bolder px-3  h5 py-3  m-0`}>
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
