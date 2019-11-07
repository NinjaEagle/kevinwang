import React, { Component } from 'react';
import MyInfo from '../components/MyInfo';
import '../css/about.css'
// import { Controller, Scene } from "react-scrollmagic";

class About extends Component {
    render() {
      return (
        <div id="about">
          <img
            // src={require(`../images/kevin.jpg`)}
            style={{ height: "200px", margin: "7%"}}
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
            <MyInfo />
          </div>
          {/* </Scene>
          </Controller> */}
        </div>
      );
  }
}

export default About;