"use client";
import React, { useState } from "react";
import Link from "next/link";
import "@/componentStyle/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar-sticky">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center py-lg-2">
            <div> 
                <Link href="/">
                <img className="img-fluid" src="/assets/img/logo.avif" alt="logo" height={50} width={50} />
                </Link>
            </div>
 
            <div className="bars-icon-display">
              <button
                className="menu-toggle text-white fs-4"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <i className="fa-solid fa-xmark"></i>  
                ) : (
                  <i className="fa-solid fa-bars"></i> 
                )}
              </button>
            </div>
 
            <div className={`menu-links ${isOpen ? "open" : ""}`}>
              <ul className="d-lg-flex d-block gap-3 m-0 p-0">
                <li className="list-style py-2">
                  <Link
                    className="text-decoration text-white"
                    href="/International"
                    onClick={() => setIsOpen(false)} 
                  >
                    International associates Portfolio 
                  </Link>
                </li>
                <li className="list-style py-2">
                  <Link
                    className="text-decoration text-white"
                    href="#"
                    onClick={() => setIsOpen(false)}
                  >
                    National artist
                  </Link>
                </li>
                <li className="list-style py-2">
                  <Link
                    className="text-decoration text-white"
                    href="#"
                    onClick={() => setIsOpen(false)}
                  >
                    Competition
                  </Link>
                </li>
                <li className="list-style py-2">
                  <Link
                    className="text-decoration text-white"
                    href="#"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
