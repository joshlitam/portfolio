import React from 'react'
import "./about.css"
import WebDev from "../../img/webdev.png"
import ProjMgt from "../../img/proj-mgt.png"
import Mee from "../../img/mee.jpg"


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img src={Mee}alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Enjoys playing video games and exploring different types of cuisines. Big fan of Japanese light novels such as Re:Zero, Classroom of the Elite, Dan Machi.
        </p>
        <h2 className="a-work">Most Recent Work Experience</h2>
        <div className="a-award">
          <img src={WebDev} alt="" className="a-award-img" />
            <div className="a-award-texts">
                <h4 className="a-award-title">Freelance Web Developer (September 2022-Present)</h4>
                <p className="a-award-desc">
                Languages include: HTML, CSS, JS
                </p>
                <p className="a-award-desc">
                Technologies used: Mongodb, React, Bootstrap, MUI, Tailwind
                </p>
            </div>
        </div>
        <div className="a-award">
          <img src={ProjMgt} alt="" className="a-award-img" />
            <div className="a-award-texts">
                <h4 className="a-award-title">Project Management Head (April 2022-September 2022)</h4>
                <p className="a-award-desc">
                Worked as the head of Project Management for an Esports Company
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
