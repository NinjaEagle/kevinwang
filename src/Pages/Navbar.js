import React, { Component} from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import '../sass/navbar.css';

class NavBar extends Component {
  // scrollToTop = () => {
  //   scroll.scrollToTop();
  // }
  
  render() {
    
    return (
      <nav class="navbar is-link is-fixed-top">
        <div class="navbar-brand">
          <a class="navbar-item" href="#welcome">
            <img
              src={require(`../images/logo.png`)}
              alt="kev logo"
              height="28"
            />
            <h1>Kevin Wang</h1>
          </a>
          <div
            class="navbar-burger burger"
            data-target="navMenu"
            id="nav-toggle"
            onClick={() => {
              let toggle = document.querySelector(".navbar-burger");
              let menu = document.querySelector(".navbar-menu");
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

            <a class="navbar-item is-active" href="#skills">
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
