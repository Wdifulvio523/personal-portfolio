import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        I consider myself a T-shaped developer, which meand I have knowledge 
        in a wide variety of languages and platforms, and I specialize in a specific area
      </p>

      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand html5" />
            <em>HTML5</em>
          </li>
          <li>
            <span className="bar-expand css" />
            <em>CSS</em>
          </li>
          <li>
            <span className="bar-expand javascript" />
            <em>Javascript</em>
          </li>
          <li>
            <span className="bar-expand react" />
            <em>React</em>
          </li>
          <li>
            <span className="bar-expand redux" />
            <em>Redux</em>
          </li>
          <li>
            <span className="bar-expand back-end" />
            <em>Back-End (API, Database, Axios)</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
