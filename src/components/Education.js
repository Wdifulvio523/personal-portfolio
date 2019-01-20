import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Lambda School</h3>
          <p className="info">
            Full-Stack Web Development/Computer Science Fundamentals
            <span>&bull;</span>
            <em className="date">March 2019</em>
          </p>

          <p>
            Lambda School is where I began my Web Development Journey and where I gained the bulk of 
            my Web Development and Computer science knowledge. Lambda School is a remote learning experience
            that uses modern web technologies and the most up-to-date industry standards to teach students not only 
            certain programming languages and syntax, 
            but to be able to adapt their web development skills to pick up and use any language that is needed. 
            The instructors at Lambda School are also world-class, each one experts in their respected field.
            The Full-Stack curriculum is a grueling journey starting with HTML/CSS, Javascript, React, and Redux, 
            then continuing through Back-End with Express and Node.js, Data Persistence, Authentication and Testing. 
            {/* After the Web Development portion of the curriculum is complete, the Computer Science Fundamentals   */}

          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Pennsylvania State University</h3>
          <p className="info">
            Bachelor of Science Degree - Economics
            <span>&bull;</span>
            <em className="date">May 2011</em>
          </p>

          <p>
            At Penn State, I achieved my goal of getting a Bachelor of Science degree in Economics, 
            and learned so many more intangible skills I never thought I would. I learned how to effectively communicate my thoughts, 
            whether it's verbal or written communication. I learned how to be a problem-solver. 
            I learned how to see ways to improve and then act on it. 
            I learned empathy for others and the understanding that we all have a different story,
             but we're also alike in so many ways. 
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
