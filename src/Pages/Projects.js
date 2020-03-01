import React from "react";
import EachProject from "../components/EachProject";
// import {PROJECTS} from '../Projects/Data.js';
import Jump from "react-reveal/Jump";
import "../sass/projects.scss";
export default class Projects extends React.Component {
  render() {
    let eachProject = this.props.data.map(project => {
      return <EachProject project={project} />;
    });
    return (
      <React.Fragment>
        <div id="projects" className="projects-cards">
          <Jump>
            <h2 class="project-title has-text-centsered-mobile is-size-2 is-family-code">
              {"Projects"}
            </h2>
          </Jump>
          {eachProject}
        </div>
      </React.Fragment>
    );
  }
}
