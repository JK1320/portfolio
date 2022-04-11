import React from 'react';
import "./about.css";
import Award from "../../img/certificate.jpg";

const About = () => {
    return (
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src={Award} alt="" className="a-img" />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            I had left my job due to child care responsibilities in 2019. I
            started looking into a career in tech. I was not quite sure which
            path to take as tech industry is so vast.
          </p>
          <p className="a-desc">
            I came across CodeYourFuture, who took me onto their programme to
            train me towards becoming a full stack developer.
          </p>
          <div className="a-award">
            {/* <img src={Award} alt="" className="a-award-img" /> */}
            <div className="a-award-texts">
              <h4 className="a-award-title">Full Stack Developer</h4>
              <p className="a-award-desc">
                I have graduated as a full stack developer from CodeYourFuture.
                My final project was Knowledge Checklist, a Full Stack Project.
                I worked in a team of 4 to create an app in 4 weeks. I
                contributed to the front-end (created wireframe and react
                components) and the back-end (contributed to creating routes,
                tables in database & writing sql queries) aspects of the app. We
                used React, Node, Express and PostgreSQL, CSS to create it and
                used heroku to deploy it.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;
