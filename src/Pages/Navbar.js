import React, { Component, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class NavBar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  }

  render() {
    return (
      <nav className="nav">
        <div className="nav-content">
          <div className="nav-items">
            <div className="nav-item">
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
                    style={{ height: "60px" }}
                    src={require(`../images/logo.png`)}
                    alt=''
                  />
                </span>
              </Link>
            </div>

            <div className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={995}
                duration={1000}
              >
                About Me
              </Link>
            </div>
            <div className="nav-item">
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
            </div>
            {/* <div className="nav-item">
              <Link
                activeClass="active"
                to="skills-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                Skills
              </Link>
            </div> */}
            <div className="nav-item">
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
            </div>
          </div>
        </div>
      </nav>
    );
  };
};

export default NavBar;
