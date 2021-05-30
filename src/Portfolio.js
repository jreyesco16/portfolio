import './Portfolio.scss';
import React from 'react';
import avatar from "./img/portfolio-avatar.jpg"
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'

import java_logo from './img/java.png'
import c_cplusplus from './img/c.png'
import python_logo from './img/python.png'
import javascript from './img/javascript.png'
import html from './img/html.png'
import css from './img/css.png'
import docker from './img/docker.png'
import gunicorn from './img/gunicorn.png'
import mysql from './img/mysql.png'
import nginx from './img/nginx.png'
import nodejs from './img//nodejs.png'
import scss from './img/scss.png'
import express from './img/expressjs.png'
import typescript from './img/typescript.png'
import aws from './img/aws.png'

import huskers from './img/huskers.png'

import linkedin from "./img/linkedin-logo.png"
import github from "./img/github-logo.png"
import leetcode from './img/leetcode-logo.png'
import habitatforhumanity from './img/habitat-for-humanity.jpg'
import lifechurch from './img/austin-life-church.png'
import peoplecitymission from './img/peoples-city-mission.gif'

class Portfolio extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      languages: false,
      languages_status: <IoIosArrowDown/>,
      languages_style: {display: "none"},
      projects: false,
      projects_status: <IoIosArrowDown/>,
      projects_style: {display: "none"},
      aboutme: false,
      aboutme_status: <IoIosArrowDown/>,
      aboutme_style: {display: "none"}
    }

    this.dropdownChange = this.dropdownChange.bind(this)
  }

dropdownChange (data) {

  if(data==="languages"){
    this.setState({languages_style : {display: this.state.languages ? "none" : "revert"}})
    this.setState({languages_status: this.state.languages ? <IoIosArrowDown/> : <IoIosArrowUp/>})
    this.setState({languages : this.state.languages ? false : true})
  }else if(data==="projects"){
    this.setState({projects_style : {display: this.state.projects ? "none" : "inline-flex"}})
    this.setState({projects_status: this.state.projects ? <IoIosArrowDown/> : <IoIosArrowUp/>})
    this.setState({projects : this.state.projects ? false : true})
  }else if(data==="aboutme"){
    this.setState({aboutme_style : {display: this.state.aboutme ? "none" : "revert"}})
    this.setState({aboutme_status: this.state.aboutme ? <IoIosArrowDown/> : <IoIosArrowUp/>})
    this.setState({aboutme : this.state.aboutme ? false : true})
    
  }
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
            </p>
          </div>

          <br/>

          <div className="portfolio-section"> 
              <div className="section-title"> Computer Languages </div>
              <div className="section-status" onClick={() => this.dropdownChange("languages")}> {this.state.languages_status} </div>
          </div>
          {/* LANGUAGES */}
          <div className="languages" style={this.state.languages_style}> 

            <br/>
          
            <img className="language" src={java_logo} alt="java logo"/>
            <img className="language" src={c_cplusplus} alt="c/c++ logo" />
            <img className="language" src={python_logo} alt="python logo" />
            <img className="language" src={javascript} alt="javascript logo" />
            <img className="language" src={html} alt="html logo" />
            <img className="language" src={css} alt="css logo" /> 
            <img className="language" src={typescript} alt="typescript logo" />
            <img className="language" src={mysql} alt="mysql logo" />
            
            <br/> <br/>

            <img className="framework" src={docker} alt="docker logo" />
            <img className="framework" src={gunicorn} alt="gunicorn logo" />
            <br/>
            <img className="framework" src={nginx} alt="nginx logo" />
            <img className="framework" src={nodejs} alt="nodejs logo" />
            <img className="framework" src={scss} alt="scss logo" />
            <img className="framework" src={express} alt="express logo" />
            
            <br/>

            <img className="cloud" src={aws} alt="aws logo" />
            

          </div>

          <div className="portfolio-section">
              <div className="section-title"> Projects </div>
              <div className="section-status" onClick={() => this.dropdownChange("projects")}> {this.state.projects_status} </div>
          </div>
          {/* PROJECTS */}
          <div className="projects" style={this.state.projects_style}>
            <div className="project-section">
              Invoice Theatre System <br/>
              2018-2019
            </div>
            <div className="project-section">
              Yahtzee Online <br/>
              2020
            </div>
            <div className="project-section">
              The Market <br/>
              2020-Current
            </div>
          </div>

          <div className="portfolio-section">
              <div className="section-title">About Me</div>
              <div className="section-status" onClick={() => this.dropdownChange("aboutme")}> {this.state.aboutme_status} </div>
          </div>
          {/* ABOUT ME */}
          <div className="aboutme" style={this.state.aboutme_style}>

            <table style={{width:"100%"}}>
              <tr>
                <th>ME</th>
                <th>HOBBIES</th>
                <th>AGE</th>
              </tr>
              <tr>
                <td>Web Developer + Software Engineer</td>
                <td>Hunting + Fishing</td>
                <td>April 16, 1995</td>
              </tr>
              <tr>
                <td>Austin, TX USA</td>
                <td>Reading</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Cars</td>
              </tr>
              <tr>
                <td></td>
                <td>Computer Engineering</td>
              </tr>
              <br/>
              <tr>
                <th>EDUCATION</th>
                <th>EXPERIENCE</th>
              </tr>
              <tr>
                <td>University of Nebraska - Lincoln <img className="husker-logo" src={huskers} alt="husker logo"/></td>
                <td>Theatre Invoice System</td>
              </tr>
              <tr>
                <td>Major - Computer Science</td>
                <td>Yahtzee Online</td>
              </tr>
              <tr>
                <td>Minor - Mathematics</td>
                <td>Market</td>
              </tr>
              <tr>
                <td>GPA 2.7</td>
              </tr>
              <tr>
                <td>2013-2020</td>
              </tr>
            </table>
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
