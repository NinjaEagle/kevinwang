import React, { Component } from 'react';
import redux from '../images/redux.png';
import rails from '../images/rails.png';
import '../sass/skills.scss';
import Postgresql from '../images/Postgresql.svg';
import Fade from 'react-reveal/Fade';
class Skills extends Component {

    // const reactStyle = {font-size: '48px', color: 'blue'};

  render() {
      return (
        <div id="skills" class="skills-section" >
          <div class="skills-title has-text-centered-mobile is-size-2">{"Skills"}</div>
          <Fade bottom delay={200}>
          <div id="skills-list">
            <div class="skillcard">
              <h2>CSS3</h2>
              {/* <img src="https://assets.website-files.com/5dbb30f00775d4c32191a4df/5dcac9294d247f107482a185_css-3-plain-wordmark.svg" alt="csssss"></img> */}
              <i class="logo fab fa-css3-alt fa-3x" style= {{height:"80px"}}></i>
            </div>
            <div class="skillcard">
              <h2>Git</h2>
              <i class="logo fab fa-github fa-3x" style= {{height:"80px"}}></i>
            </div>
            <div class="skillcard ">
              <h2>HTML5</h2>
              <i class="logo fab fa-html5 fa-3x " style= {{height:"80px"}}></i>
            </div>

            <div class="skillcard">
              <h2>Javascript</h2>
              <i class="logo fab fa-js-square fa-3x" style= {{height:"80px"}}></i>
            </div>
            <div class="skillcard">
              <h2>PostgreSQL</h2>
              <img class="postgres" src={Postgresql} alt="" style= {{height:"80px"}}/>
            </div>
            <div class="skillcard">
              <h2>Ruby on Rails</h2>
              <img src={rails} alt="" style={{ height: "100px" }} />
            </div>
            <div class="skillcard">
              <h2> React </h2>
              <i class="logo fab fa-react fa-3x" style= {{height:"80px"}}></i>
            </div>
            <div class="skillcard">
              <h2>Redux</h2>
              <img src={redux} style={{ height: "70px" }} alt="" />
            </div>
          </div>
            </Fade>
        </div>
      );
    }
}

export default Skills;