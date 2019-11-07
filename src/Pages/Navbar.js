import React, { Component, Fragment} from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import '../css/navbar.css';

class NavBar extends Component {
  // scrollToTop = () => {
  //   scroll.scrollToTop();
  // }
  
  render() {
    
    return (
      <nav class="navbar is-link is-fixed-top">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <img
              src={require(`../images/logo.png`)}
              alt="my face"
              height="28"
            />
          </a>
          <div
            class="navbar-burger burger"
            data-target="navMenu"
            id="nav-toggle"
            onClick={() => {
              let toggle = document.querySelector(".navbar-burger");
              let menu = document.querySelector(".navbar-menu");
              let link = document.querySelector(".navbar-item");
              toggle.classList.toggle("is-active");
              menu.classList.toggle("is-active");
              
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-start nav-menu">
            <a class="navbar-item is-active is-hoverable" href="#about">
              About
            </a>

            <a class="navbar-item is-active" href="#skills-list">
              Skills
            </a>

            <a class="navbar-item is-active" href="#projects">
              Projects
            </a>

            <a class="navbar-item is-active" href="#contact-me">
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
 // <nav class="navbar-is-transparent">

      //   <div class="navbar-brand">
      //     <a class="navbar-item" href="#">
      //       <span>
      //         <img
      //           style={{ height: "500px" }}
      //           src={require(`../images/logo.png`)}
      //           alt=""
      //         />
      //       </span>
      //     </a>
      //     <div
      //       class="navbar-burger burger"
      //       data-target="navbarExampleTransparentExample"
      //     >
      //       <span></span>
      //       <span></span>
      //       <span></span>
      //     </div>
      //   </div>
      //   <div class="navbar-menu" id="navbarExampleTransparentExample">
      //     <div class="navbar-start">
      //       <a class="navbar-item" href="#about">
      //         About
      //       </a>
      //       <a class="navbar-item" href="#skills-list">
      //         Skills
      //       </a>
      //       <a class="navbar-item" href="#projects">
      //         Projects
      //       </a>
      //       <a class="navbar-item" href="#contact-me">
      //         Contact Me
      //       </a>
      //     </div>
      //   </div>
      // </nav>

 // scrollToTop = () => {
  //   scroll.scrollToTop();
  // }


{/* <nav class="navbar is-transparent">
  <div class="navbar-item has-dropdown is-hoverable">
    <div class="navbar-brand">
      <Link
              activeClass="active"
              to="root"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
      <span>
        <img
          onClick={this.scrollToTop}
          style={{ height: "100px" }}
          src={require(`../images/logo.png`)}
          alt=""
        />
      </span>
      </Link>

      <div
        class="navbar-burger burger"
        data-target="navbarExampleTransparentExample"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <div class="column center desktop">
        <li class="nav-item">
          <a class="nav-link" href="about">
            <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    About Me
                  </Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="skills">
            <Link
                  activeClass="active"
                  to="skills-list"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  Skills
                </Link>
          </a>
        </li>
        <li class="nav-item">
          <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  Projects
                </Link>
        </li>
        <li class="nav-item">
          <Link
                  activeClass="active"
                  to="contact-me"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={700}
                >
                  Contact Me
                </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>; */}
