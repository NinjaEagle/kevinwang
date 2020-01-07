import React, { Component } from 'react';
import '../sass/about.css'

class About extends Component {
    render() {
      return (
        <div id="about">
          <div class="innerinfo">
            <img
              src={require(`../images/kevin.jpg`)}
              style={{ height: "200px", margin: "70px 0 18px 0px" }}
              alt="avatar"
              className="avatar-img"
            />

            <div className="backgroundinfo">
              <p>
                I am a Full Stack Developer as well as being a former
                Electrical Engineer. Since high school, my passion has been
                creating blogs.
              </p>
              <p>
                My skills are diverse: from front
                end, back end development, to hardware design. I enjoy each aspect as I create
                seamless web and mobile applications with design in mind. I'm available for remote work!
              </p>
            </div>
            <div className="links">
              <div>
                <a
                  href="https://github.com/NinjaEagle"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    className="fab fa-github-square fa-2x"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/kevin-wang-06/">
                  <i className="fab fa-linkedin fa-2x" aria-hidden="true"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://medium.com/@kwang06"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-medium fa-2x" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div class="resume">
              <a href="https://docs.google.com/document/d/1bKWJr-YGZ-OuUAfWtDJYiyBT9Rxj0Z4VX0N--u4w7x0/edit?usp=sharing">
                <i className=""></i>
                Resume
              </a>
            </div>
          </div>
        </div>
      );
  }
}

export default About;