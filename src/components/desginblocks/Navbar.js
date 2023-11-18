import React, { useState } from "react";
import logo from "../media/370258937_1000446534347484_6738224902469943689_n-removebg-preview.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Navbar() {
  const list = [
    { name: "Work", route: "/" },
    { name: "About Me", route: "/about" },
  ];
  const [open, setopen] = useState(false);
  return (
    <>
      <motion.nav
        class="navbar navbar-expand-lg navbar-dark fixed-top  py-0 filter  "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
      >
        <div class="container-fluid px-md-5">
          <Link class="fs-2 text-main fw-bolder d-block" to={"/"}>
            <img src={logo} alt="" className="img-fluid mynavbarimg" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            onClick={() => setopen(!open)}
          >
            <i
              class={`fa  text-main ${
                !open ? "fa-bars" : "fa-xmark fa-rotate-90"
              }`}
              aria-hidden="true"
            ></i>
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
      </motion.nav>

      {
        <motion.div
          className="realoff"
          initial={{ opacity: 0, y: -2000 }}
          animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -2000 }}
          transition={{ duration: 0.4, delay: 0 }}
        >
          <div className="divd">
            {list.map((i) => {
              return (
                <Link class="" to={i.route}  onClick={() => setopen(false)}>
                  <a
                    class="nav-link text-danger text-center my-2 fs-3 active  dss rounded-2 "
                    aria-current="page"
                    href={`#${i.name}`}
                  >
                    {i.name}
                  </a>
                </Link>
              );
            })}
          </div>
        </motion.div>
      }
    </>
  );
}

export default Navbar;
