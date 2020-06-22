import React from "react";

const About = () => {
  return (
    <div>
      <h1>About This App</h1>
      <p className="my-1">
        This is a full stack application utilizing different skills and
        templates I've learned. It uses React, Node.js, Express, MongoDB, and
        many other dependencies to help this run.{" "}
      </p>{" "}
      <br />
      <p>
        Feel free to email me if you have any questions by{" "}
        <a href="mailto:aleesmithnyc@gmail.com">Clicking This Link</a>
      </p>
      <p className="bg-dark p">
        <strong>Version: </strong> 1.0.0
      </p>
    </div>
  );
};

export default About;
