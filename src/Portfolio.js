import './Portfolio.scss';
import React from 'react';
import avatar from "./portfolio-avatar.jpg"
import {IoIosArrowDown} from 'react-icons/io'
import linkedin from "./linkedin-logo.png"
import github from "./github-logo.png"
import leetcode from './leetcode-logo.png'
import habitatforhumanity from './habitat-for-humanity.jpg'
import lifechurch from './austin-life-church.png'
import peoplecitymission from './peoples-city-mission.gif'

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
          <table className="footer-table">

            <tr className="footer-table-header">
              <th>History</th>
              <th>Community</th>
              <th>Contact</th>
            </tr>
            <tr className="footer-table-row">
              <td>
                <a href="https://www.linkedin.com/in/jessereyescortes0416/">
                  <img className="footer-table-img" src={linkedin} alt="linkedin" />
                </a>
              </td>
              <td>
                <a href="https://pcmlincoln.org">
                  <img className="footer-table-img" src={peoplecitymission} alt="People City Mission" />

                </a>
              </td>
              <td>
                jesserc.2@gmail.com
              </td>
            </tr>
            <tr className="footer-table-row">
              <td >
                <a href="https://github.com/jreyesco16">
                  <img className="footer-table-img" src={github} alt="github"/>
                </a>
              </td>
              <td>
                <a href="https://www.habitat.org">
                  <img className="footer-table-img" src={habitatforhumanity} alt="Habitat for Humanity" />
                </a>
              </td>
              <td>
                (531)207-8890
              </td>
            </tr>
            <tr className="footer-table-row">
              <td>
                <a href="https://leetcode.com/jreyesco16/">
                  <img className="footer-table-img" src={leetcode} alt="leetcode"/>
                </a>
              </td>
              <td>
                <a href="https://www.austinlifechurch.com">
                  <img className="footer-table-img" src={lifechurch} alt="Austin Life Church"/>
                </a>
              </td>
              <td>
                Austin TX, USA
              </td>
            </tr>

          </table>
        </div>

      </div>
    );
  }
}

export default Portfolio;
