import React, { Fragment } from 'react';

export default function MyInfo() {
    return (
      <Fragment>
        <div className="links">
          <div>
            <a href="https://docs.google.com/document/d/1bKWJr-YGZ-OuUAfWtDJYiyBT9Rxj0Z4VX0N--u4w7x0/edit?usp=sharing">
              <i className="" ></i>
              My Resume
            </a>
          </div>
          <div>
            <a
              href="https://github.com/NinjaEagle"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-github-square" aria-hidden="true" ></i>
              My Github
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/kevin-wang-06/">
              <i className="fab fa-linkedin-square" aria-hidden="true" ></i>
              LinkedIn
            </a>
          </div>
          <div>
            <a
              href="https://medium.com/@kwang06"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-medium" aria-hidden="true"></i>
              My Blogs
            </a>
          </div>
        </div>
      </Fragment>
    );
}
