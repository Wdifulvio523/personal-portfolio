import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Lambda</h3>
          <p className="info">
            Project Manager
            <span>&bull;</span>
            <em className="date">March 2010 - Present</em>
          </p>

          <p>
          As a Project Manager with Lambda, I oversaw 10-5 students as they learned full-stack web development,
           managing attendance, participation, and progress of each student.
          I was tasked with reviewing the code of each student for accuracy and recommending changes, if necessary. 
          I also led workshops on with students on specific subjects, answering any questions they had on the topics I covered.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Management Experience</h3>
          <p className="info">
            24/7InTouch Contact Center
            <span>&bull;</span>
            <em className="date">March 2007 - February 2010</em>
          </p>

          <p>
          In addition to my Web Development Experience, I have over three years of management experience. blah blach blah.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
