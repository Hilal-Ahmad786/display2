/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import getSiblings from '../../common/getSiblings'

const NavbarTesla = ({ navbarRef, logoRef, logoClass }) => {
  const handleDropdown = (e) => {
    getSiblings(e.target.parentElement)
      .filter((item) => item.classList.contains("show"))
      .map((item) => {
        item.classList.remove("show");
        if (item.childNodes[0]) {
          item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[1]) {
          item.childNodes[1].classList.remove("show");
        }
      });
    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
  };

  const handleMobileDropdown = (e) => {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("show-with-trans");
  };

  return (
    <>
      <nav className="navbar change navbar-expand-lg" ref={navbarRef}>
        <div className="container-fluid">
          <Link href="/demos">
            <a className= {`ml-5 logo ${logoClass && logoClass}`}>
              <img src={appData.lightLogo} alt="logo" ref={logoRef} />
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            onClick={handleMobileDropdown}
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav NavUlCenter">
              <li className="nav-item dropdown" onClick={handleDropdown}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Flat Pack
                </span>
                <div className="dropdown-menu">
                  <Link href="/home7">
                    <a className="dropdown-item">Flat Pack</a>
                  </Link>
                  <Link href="/PopUp">
                    <a className="dropdown-item">PopUP</a>
                  </Link>
                  <Link href="/con11">
                    <a className="dropdown-item">Bürocontainer</a>
                  </Link>
                  <Link href="/Burocontainer">
                    <a className="dropdown-item">XL Container</a>
                  </Link>
                  <Link href="/SantianeContainer">
                    <a className="dropdown-item">Santiane Container</a>
                  </Link>
                  <Link href="/XL">
                    <a className="dropdown-item">Special Edition</a>
                  </Link>
                  <Link href="/home6">
                    <a className="dropdown-item">Interior Agency</a>
                  </Link>
                  <Link href="/home5">
                    <a className="dropdown-item">Creative Arch</a>
                  </Link>
                  <Link href="/home4">
                    <a className="dropdown-item">Architecture Studio</a>
                  </Link>
                  <Link href="/home1">
                    <a className="dropdown-item">Home Light</a>
                  </Link>
                  <Link href="/home2">
                    <a className="dropdown-item">Interior Light</a>
                  </Link>
                  <Link href="/home3">
                    <a className="dropdown-item">Architecture Light</a>
                  </Link>
                  <Link href="/HomeTesla">
                    <a className="dropdown-item">HomeTesla</a>
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">Bürocontainer</a>
                </Link>
              </li>
              <li className="nav-item dropdown" onClick={handleDropdown}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  XL Container
                </span>
                <div className="dropdown-menu">
                  <Link href="/work1">
                    <a className="dropdown-item">Two Column</a>
                  </Link>
                  <Link href="/work2">
                    <a className="dropdown-item">Three Column</a>
                  </Link>
                  <Link href="/work3">
                    <a className="dropdown-item">Four Column</a>
                  </Link>
                  <Link href="/project-details">
                    <a className="dropdown-item">Single Project</a>
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown" onClick={handleDropdown}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Santiane Container
                </span>
                <div className="dropdown-menu">
                  <Link href="/blogs">
                    <a className="dropdown-item">Blogs</a>
                  </Link>
                  <Link href="/blog-details">
                    <a className="dropdown-item">Post Details</a>
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">Special Edition</a>
                </Link>
              </li>

            </ul>
            <ul className="navbar-nav NavUlLeftCorner">
            <li className="nav-item dropdown" onClick={handleDropdown}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Menu
                </span>
                <div className="dropdown-menu">
                  <Link href="/work1">
                    <a className="dropdown-item">Two Column</a>
                  </Link>
                  <Link href="/work2">
                    <a className="dropdown-item">Three Column</a>
                  </Link>
                  <Link href="/work3">
                    <a className="dropdown-item">Four Column</a>
                  </Link>
                  <Link href="/project-details">
                    <a className="dropdown-item">Single Project</a>
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown" onClick={handleDropdown}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Language
                </span>
                <div className="dropdown-menu">
                  <Link href="/work1">
                    <a className="dropdown-item">Two Column</a>
                  </Link>
                  <Link href="/work2">
                    <a className="dropdown-item">Three Column</a>
                  </Link>
                  <Link href="/work3">
                    <a className="dropdown-item">Four Column</a>
                  </Link>
                  <Link href="/project-details">
                    <a className="dropdown-item">Single Project</a>
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown" onClick={handleDropdown}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Shop
                </span>
                <div className="dropdown-menu">
                  <Link href="/work1">
                    <a className="dropdown-item">Two Column</a>
                  </Link>
                  <Link href="/work2">
                    <a className="dropdown-item">Three Column</a>
                  </Link>
                  <Link href="/work3">
                    <a className="dropdown-item">Four Column</a>
                  </Link>
                  <Link href="/project-details">
                    <a className="dropdown-item">Single Project</a>
                  </Link>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarTesla;
