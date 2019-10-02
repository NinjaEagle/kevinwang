import React from 'react'
import {PROJECTS} from '../Projects/Data';
import EachProject from '../components/EachProject';
import Jump from 'react-reveal/Jump'

export default class Projects extends React.Component {
    state = {
        react: true,
        js: true,
        rails:true,
    }
    render() {
      let eachProject = PROJECTS.map(project => {
           return <EachProject project={project} />
         });
        
        return (
       
            <React.Fragment>
              <div id="projects" className="projects-cards">
                <Jump>
                <h2>{"Projects"}</h2>
                <div className="project-container">
                    {eachProject}
                </div>
               </Jump>
               </div>
            </React.Fragment>
      
        );
    }
}
