import React, { Component } from 'react';
import './Navbar.css';



class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false,
      logo: 'https://cdn.glitch.com/7d9e80e5-cf2e-47b5-8b83-1a4dc62423e7%2FZ_Logo_white.svg?v=1570127747187'
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    if (window.scrollY > 50) {
      console.log("should lock");
      this.setState({
        scrollingLock: true,
        logo: 'https://cdn.glitch.com/7d9e80e5-cf2e-47b5-8b83-1a4dc62423e7%2FZ%20Logo.svg?v=1569609992085'
      });
    } else if (window.scrollY < 50) {
      console.log("not locked" );
      this.setState({
        scrollingLock: false,
        logo: 'https://cdn.glitch.com/7d9e80e5-cf2e-47b5-8b83-1a4dc62423e7%2FZ_Logo_white.svg?v=1570127747187'
      });
    }
  
  }
  render() {
    return (
      <div className="navbar-main-container" style={{position: this.state.scrollingLock ? "fixed" : "relative", paddingTop: this.state.scrollingLock ? "0px" : "30px", top: this.state.scrollingLock ? "0" : "none", backgroundColor: this.state.scrollingLock ? "white" : " ", color: this.state.scrollingLock ? "#005C57" : "white", borderBottom: this.state.scrollingLock ? "2px solid #005C57" : " "}}>
        <div className="nav-left-container">
            <div className="nav-img-container">
             <a href="#home"><img src={this.state.logo}></img></a>
            </div>
            <div  className="nav-title-container">
             <a style={{color: this.state.scrollingLock ? "#005C57" : "white"}} href="#home" className="zander-navbar-title">Zander Brownlie-Edward</a>
            </div>
        </div>
        <div className="nav-right-container">
            <nav>
              <a style={{color: this.state.scrollingLock ? "#005C57" : "white"}} href="#projects">Projects</a> 
              <a style={{color: this.state.scrollingLock ? "#005C57" : "white"}} href="#contact">Contact</a> 
            </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;