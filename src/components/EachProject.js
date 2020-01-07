import React, { Component } from 'react'
import "../sass/projects.scss";
export default class EachProject extends Component {
  render() {
      const {
        name,
        info,
        githubFrontEnd,
        // githubBackEnd,
        video,
        live,
        // github,
        img,
      } = this.props.project;

      return (
        <div class="each-project">
          {/* <div class= ""> */}
            <h2 class="subtitle">
              <strong>{name}</strong>
            </h2>
              <p className="projectinfo">{info}</p>
              <img src={img} alt="animated" width="800" height="800" />
              <br></br><br></br>
            
              <div className = "project-links">
                <div>
                  <a href={githubFrontEnd} rel="noopener noreferrer"
                    target="_blank">
                  <i className="contactlinks fab fa-github-square fa-2x" aria-hidden="true"></i></a>  
                </div>
                  {live ? (
                <div>   
                  <a href={live} rel="noopener noreferrer"
                  target="_blank">Live</a>
                </div>
                  ) : (
                    <></>
                  )}
                {video ? (
                  <div>
                    <a href={video} rel="noopener noreferrer"
                    target="_blank">Demo </a>
                  </div>
                    ) : (
                      <></> 
                    )
                  }
              </div>
          {/* </div> */}
          <hr class="section-break-2" />
      </div>
      );  
  }
}

//  <div className="eachproject">
//             <h2>{name}</h2>
//             <p>{info}</p>
//             <p>{img}</p>
//             <p>{video}</p>
//             FrontEnd:<p>{githubFrontEnd}</p>
//             BackEnd:<p>{githubBackEnd}</p>
//           </div>