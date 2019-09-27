import React, { Component } from 'react';
import MyInfo from '../components/MyInfo';

class About extends Component {
    render() {
        return (
          <div>
            <p>
              Hello I'm Kevin Wang. I am a native New Yorker. I am a Full Stack Developer as well as being a former
              Electrical Engineer. Since high school, my passion has been making blogs. 
            </p>
            <p>
               My education from Flatiron School helped me solidify my front end and back end knowledge even further by allowing me to create seamless web applications with design in mind.
            </p>
            <MyInfo />
          </div>
        );
    }
}

export default About;