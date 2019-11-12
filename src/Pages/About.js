import React, { Component } from 'react';
import '../css/about.css'
// import { Controller, Scene } from "react-scrollmagic";

class About extends Component {
    render() {
      return (
        <div id="about">
          <img
            src={require(`../images/kevin.jpg`)}
            style={{ height: "200px", margin: "70px 0 18px 0px"}}
            alt="avatar"
            className="avatar-img"
          />
          {/* <Controller >
            <Scene    
              triggerHook="onLeave"
              duration={600}
              pin
            > */}
          <div className="backgroundinfo">
            <p>
              Hey y'all! I'm Kevin Wang. I am a proud native New Yorker. I am a
              Full Stack Developer as well as being a former Electrical
              Engineer. Since high school, my passion has been making blogs
              about environmental awareness, life hacks and cool tech.
            </p>
            <p>
              My education from Flatiron School helped me solidify my front end
              and back end knowledge even further by allowing me to create
              seamless web applications with design in mind.
            </p>
          </div>
          <div className="links">
            <div>
              <a href="https://docs.google.com/document/d/1bKWJr-YGZ-OuUAfWtDJYiyBT9Rxj0Z4VX0N--u4w7x0/edit?usp=sharing">
                <i className="" ></i>
                My Resume
              </a>
            </div>
            <div>
              <a
                href="https://github.com/NinjaEagle"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github-square fa-2x" aria-hidden="true" ></i>
                Github
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/kevin-wang-06/">
                <i className="fab fa-linkedin fa-2x" aria-hidden="true" ></i>
              
              </a>
            </div>
            <div>
              <a
                href="https://medium.com/@kwang06"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-medium fa-2x" aria-hidden="true"></i>
                My Blogs
              </a>
            </div>
          </div>
            {/* </Scene>
            </Controller> */}
        </div>
      );
  }
}

export default About;