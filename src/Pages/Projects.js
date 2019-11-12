import React from 'react'
import {PROJECTS} from '../Projects/Data';
import EachProject from '../components/EachProject';
import Jump from 'react-reveal/Jump'
import "../sass/projects.scss";
export default class Projects extends React.Component {
    // state = {
    //     react: true,
    //     js: true,
    //     rails:true,
    // }

    render() {
      let eachProject = PROJECTS.map(project => {
           return <EachProject project={project} />
         });
        
        return (
          <React.Fragment>
            <div id="projects" className="projects-cards">
              <Jump>
                <h2 class="project-title has-text-centered-mobile is-size-2 is-family-code">
                  {"Projects"}
                </h2>
              </Jump>
              {eachProject}
            </div>
          </React.Fragment>
        );
    }
}
