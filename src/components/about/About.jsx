import React from 'react';
import "./about.css";
import Award from "../../img/certificate.jpg";

const About = () => {
    return (
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img
              src={Award}
              alt=""
              className="a-img"
            />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, iusto
            amet, sapiente doloribus dignissimos voluptatum iure dolor dolorum
            voluptates accusantium at? Quis velit libero laudantium praesentium
            sint. Accusamus, nostrum laborum?
          </p>
          <p className="a-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo
            officiis quis aut id ex dignissimos, molestias modi exercitationem,
            sapiente ab, similique veniam soluta? Vel quas corporis tenetur eos
            nisi?
          </p>
          <div className="a-award">
            {/* <img src={Award} alt="" className="a-award-img" /> */}
            <div className="a-award-texts">
              <h4 className="a-award-title">Full Stack Developer</h4>
              <p className="a-award-desc">
                I have graduated as a full stack developer from CodeYourFuture. My final project was 
                Knowledge Checklist, a Full Stack Project. I worked in a team of 4
                to create an app in 4 weeks. I contributed to the front-end
                (created wireframe and react components) and the back-end
                (contributed to creating routes, tables in database & writing
                sql queries) aspects of the app. We used React, Node, Express
                and PostgreSQL, CSS to create it and used heroku to deploy it.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;
