import "./intro.css";
import React from 'react';
import Image from "../../img/my.jpg"; 

function intro() {
    return (
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">Jasvir Kaur</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">Front-end</div>
                <div className="i-title-item">Back-end</div>
              </div>
            </div>
            <div className="i-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              beatae placeat velit deserunt nisi, Accusantium, earum.
            </div>
          </div>
        </div>
        <div className="i-right">
            <img src={Image} alt="" className="i-img" />
        </div>
      </div>
    );
}

export default intro
