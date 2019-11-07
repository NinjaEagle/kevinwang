import React, { Component } from 'react';
import redux from '../images/redux.png';
import rails from '../images/rails.png';
import '../sass/skills.scss';
import Postgresql from '../images/Postgresql.svg'
class Skills extends Component {

    // const reactStyle = {font-size: '48px', color: 'blue'};

    render() {
        return (
          <div id="skills-list">
            <div class="has-text-centered-mobile is-size-2">{"Skills"}</div>
            <div class="skillcard">
              <h2>CSS3</h2>
              <i class="fab fa-css3-alt fa-3x"></i>
            </div>
            <div class="skillcard">
              <h2>Git</h2>
              <i class="fab fa-github fa-3x"></i>
            </div>
            <div class="skillcard">
              <h2>HTML5</h2>
              <i class="fab fa-html5 fa-3x"></i>
            </div>
            <div class="skillcard">
              <h2>Javascript</h2>
              <i class="fab fa-js-square fa-3x"></i>
            </div>
            <div class="skillcard">
              <h2>PostgreSQL</h2>
              <img src={Postgresql} alt="" style={{ height: "80px" }} />
            </div>
            <div class="skillcard">
              <h2>Ruby on Rails</h2>
              <img src={rails} alt="" style={{height:"100px"}} />
            </div>
            <div class="skillcard">
              <h2> React </h2>
              <i class="fab fa-react fa-3x"></i>
            </div>
            <div class="skillcard">
              <h2>Redux</h2>
              <img src={redux} style={{ height: "80px" }} alt="" />
            </div>
          </div>
        );
    }
}

export default Skills;