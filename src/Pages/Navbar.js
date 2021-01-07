import React, { Component } from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import "../sass/navbar.css";

class NavBar extends Component {
  handleClick = () => {
    let unToggle = document.querySelector(".navbar-burger");
    let menu = document.querySelector(".navbar-menu");
    unToggle.classList.remove("is-active");
    menu.classList.remove("is-active");
  };

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
            <a
              class="navbar-item is-active is-hoverable"
              href="#about"
              onClick={this.handleClick}
            >
              About
            </a>

            <a
              class="navbar-item is-active"
              href="#skills"
              onClick={this.handleClick}
            >
              Skills
            </a>

            <a
              class="navbar-item is-active"
              href="#projects"
              onClick={this.handleClick}
            >
              Projects
            </a>

            <a
              class="navbar-item is-active"
              href="#contact-me"
              onClick={this.handleClick}
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
