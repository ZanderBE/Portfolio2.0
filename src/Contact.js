import React, { Component } from 'react';
import './Contact.css';


class Contact extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div id="contact"className="contact-main-container">
          <div className="contact-title-container">
            <h1 className="contact-title">Contact</h1>
          </div>
          <div className="contact-sub-container">
            <div className="avatar-img-container">
              <img src="https://cdn.glitch.com/7d9e80e5-cf2e-47b5-8b83-1a4dc62423e7%2Fundraw_Astronaut_xko2.svg?v=1569022396950" alt="astronaught avatar"></img>
            </div>
            <div className="talk-resume-container">
              <h1 className="lets-title-text">Let's</h1>
              <h1 className="talk-title-text">Talk.</h1>
              <a className="resume-button" href="https://cdn.glitch.com/5bdbc3f0-6ef7-4583-914e-c944ce23d541%2FFront%20End%20Developer%20Resume%202.1.pdf?v=1569886306700">Resume</a>
            </div>
            <div className="contact-links-container">
              <a href="https://linkedin.com/in/zanderbrownlieedward"><img src="https://cdn.glitch.com/7d9e80e5-cf2e-47b5-8b83-1a4dc62423e7%2Flinkedin.svg?v=1569022431231" alt="linkedin icon" className="linkedin-icon"></img></a>
              <a href="https://github.com/ZanderBE"><img src="https://cdn.glitch.com/7d9e80e5-cf2e-47b5-8b83-1a4dc62423e7%2Fgithub.svg?v=1569022414803" alt="github icon" className="github-icon"></img></a>
              <a href="https://twitter.com/ZanderBE2"><img src="https://cdn.glitch.com/7d9e80e5-cf2e-47b5-8b83-1a4dc62423e7%2Ftwitter.svg?v=1569022420741" alt="twitter icon" className="twitter-icon"></img></a>
            </div>
          </div>
      </div>
    );
  }
}

export default Contact;