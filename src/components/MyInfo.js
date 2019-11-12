import React, { Fragment } from 'react';

export default function MyInfo() {
    return (
      <Fragment>
        <div className="links">
          <div>
            <a href="mailto: kcwang06@gmail.com">
              <i
                className="contactlinks fas fa-envelope-square fa-3x wow bounceIn"
                data-wow-delay=".1s"
              ></i>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/NinjaEagle"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i
                className="contactlinks fab fa-github-square fa-3x wow bounceIn"
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/kevin-wang-06/">
              <i
                className="contactlinks fab fa-linkedin fa-3x wow bounceIn"
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/kevlyoko">
              <i
                className="contactlinks fab fa-twitter fa-3x wow bounceIn"
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <div>
            <a
              href="https://medium.com/@kwang06"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i
                className="contactlinks fab fa-medium fa-3x wow bounceIn"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
        <div class="resume">
          <a href="https://docs.google.com/document/d/1bKWJr-YGZ-OuUAfWtDJYiyBT9Rxj0Z4VX0N--u4w7x0/edit?usp=sharing">
            <i className=""></i>
            My Resume
          </a>
        </div>
      </Fragment>
    );
}
