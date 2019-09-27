import React, { Component } from 'react'
import {Data} from './Projects'

export default class Projects extends Component {
    state = {
        react: true,
        js: true,
        rails:true,
        redux:true
    }
    render() {
        let eachProject = Data.map(project => {
          return <EachProject project={project} />;
        });
        
        return (
          <div>
            <React.Fragment>
              <div className="projects-cards">
                <h2>{"Projects"}</h2>
             
                <div className="project-container">{eachProject}</div>
               </div>
            </React.Fragment>
          </div>
        );
    }
}
