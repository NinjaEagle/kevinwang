import React, { Component } from 'react';
import MyInfo from '../components/MyInfo';
import styled from 'styled-components';
// import { Controller, Scene } from "react-scrollmagic";

class About extends Component {

    render() {
      const SectionWipes2Styled = styled.div`
        overflow: hidden;
        #pinContainer {
          height: 100vh;
          width: 100vw;
          overflow: hidden;
        }
        #pinContainer .panel {
          height: 100vh;
          width: 100vw;
          position: absolute;
          text-align: center;
        }
        .panel span {
          position: relative;
          display: block;
          top: 10%;
          font-size: 80px;
        }

        .panel.blue {
          background: rgb(80, 105, 222);
          background: radial-gradient(
            circle,
            rgba(80, 105, 222, 1) 34%,
            rgba(34, 34, 48, 1) 94%
          );
        }

        .panel.info {
          background-color: rgb(68, 112, 224);
        }

        .panel.green {
          background-color: #22d659;
        }

        .panel.bordeaux {
          background-color: #953543;
        }
      `;

        return (
          <div className="intro">
            <SectionWipes2Styled>
            {/* <Controller >
              <Scene    
                triggerHook="onLeave"
                duration={600}
                pin
              > */}
              <div className="backgroundinfo">
              <p>
                Hey y'all! I'm Kevin Wang. I am a proud native New Yorker. I am a Full Stack Developer as well as being a former
                Electrical Engineer. Since high school, my passion has been making blogs. 
              </p>
              <p>
                My education from Flatiron School helped me solidify my front end and back end knowledge even further by allowing me to create seamless web applications with design in mind.
              </p>
              <MyInfo />
              </div>
              {/* </Scene>
            </Controller> */}
            </SectionWipes2Styled>
          </div>
        );
    }
}

export default About;