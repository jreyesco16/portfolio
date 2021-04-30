import './Portfolio.scss';
import React from 'react';
import avatar from "./portfolio-avatar.jpg"
import {IoIosArrowDown} from 'react-icons/io'
import linkedin from "./linkedin-logo.png"
import github from "./github-logo.png"
import leetcode from './leetcode-logo.png'

class Portfolio extends React.Component {

  constructor(props) {
    super(props)

    this.dropdownChange = this.dropdownChange.bind(this)
  }

dropdownChange (data) {
  console.log(data)
}


  render () {
    return (
      <div className="portfolio">
        <div className="portfolio-header">
          <img src={avatar} alt="avatar" className="protfolio-avatar"/>
          <div className="portfolio-name">Jesse Reyes Cortes</div>
        </div>

        <div className="main">
          <div className="portfolio-intro">
            <p>
              I was introduced to computer programming while attending college at the age of 19. <br/>
              What intrigued me about programming was it allowed me to express my passion for technology.<br/>
              As the time progressed I slowly got better and was able to accomplish things I once thought was magic.<br/>
              Only the future will determine where I go or acheive but regardless I'll continue to develop my skills.
            </p>
          </div>

          <br/>

          <div className="portfolio-section"> 
              <div className="section-title"> Computer Languages </div>
              <div className="section-status" onClick={() => this.dropdownChange("languages")}> <IoIosArrowDown/> </div>
          </div>
          {/* <div className="dropdown"> */}
            <div className="languages">
              JavaScript; HTML; Java
            </div>
          {/* </div> */}

          <div className="portfolio-section">
              <div className="section-title"> Projects </div>
              <div className="section-status" onClick={() => this.dropdownChange("projects")}> <IoIosArrowDown/> </div>
          </div>
          <div className="projects">

          </div>

          <div className="portfolio-section">
              <div className="section-title">About Me</div>
              <div className="section-status" onClick={() => this.dropdownChange("aboutme")}> <IoIosArrowDown/> </div>
          </div>
          <div className="dropdown">

          </div>
        </div>

        <div className="portfolio-footer">
          <div className="img-div">
            <a href="https://www.linkedin.com/in/jessereyescortes0416/">
              <img className="linkedin" src={linkedin} alt="linkedin" />
            </a>
          </div>
          <div className="img-div">
            <a href="https://github.com/jreyesco16">
              <img className="github" src={github} alt="github"/>
            </a>
          </div>
          <div className="img-div">
            <a href="https://leetcode.com/jreyesco16/">
              <img className="leetcode" src={leetcode} alt="leetcode"/>
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default Portfolio;
