import React, { Component } from 'react'
import "../sass/eachproject.scss";

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
            <div class="card">
              <div class="card-content center">
                <p class="title">{name}</p>
                <p class="subtitle">{info}</p>

                <img src={img} className="img-respond" alt='' />
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    <a href={githubFrontEnd}>Github</a>
                  </span>
                </p>
                <p class="card-footer-item">
                  <span>
                    <a href={live}>Live</a>
                  </span>
                </p>
                <p class="card-footer-item">
                  <span>
                    <a href={video}>Video</a>
                  </span>
                </p>
              </footer>
            </div>
            <br></br>
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