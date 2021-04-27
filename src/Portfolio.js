import './Portfolio.scss';
import avatar from "./portfolio-avatar.jpg"
import {IoIosArrowDown} from 'react-icons/io'

function App() {
  return (
    <div className="portfolio">
      <header class="portfolio-header">
        <img src={avatar} alt="avatar" class="protfolio-avatar"/>
        <div class="portfolio-name">Jesse Reyes Cortes</div>
      </header>

      <body class="main">
        <div class="portfolio-intro">
          <p>
            I was introduced to computer programming while attending college at the age of 19. <br/>
            What intrigued me about programming was it allowed me to express my passion for technology.<br/>
            As the time progressed I slowly got better and was able to accomplish things I once thought was magic.<br/>
            Only the future will determine where I go or acheive but regardless I'll continue to develop my skills.
          </p>
        </div>

        <br/>

        <div class="portfolio-section"> 
            <div class="section-title"> Languages </div>
            <div class="section-status"> <IoIosArrowDown/> </div>
        </div>

        <div class="portfolio-section">
            <div class="section-title"> Projects </div>
            <div class="section-status"> <IoIosArrowDown/> </div>
        </div>

        <div class="portfolio-section">
            <div class="section-title">About Me</div>
            <div class="section-status"> <IoIosArrowDown/> </div>
            <br/>
            <div class="section-popup">
                <p> 
                  Age: 26 <br/>
                  Skills: Web Development, Software Engineering, Computer Science <br/>
                  University: Nebraska of Nebraska - Lincoln <br/>
                </p>
            </div>
        </div>
      </body>

      <footer>

      </footer>

    </div>
  );
}

export default App;
