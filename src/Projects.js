import React, { Component } from "react";
import "./Projects.css";
let projects = require("./projects.json");

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: projects[0].project,
      title: projects[0].title,
      description: projects[0].description,
      languages: projects[0].languages,
      gitlink: projects[0].gitlink,
      livelink: projects[0].livelink
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }
  handleMouseHover(e) {
    const button = document.querySelectorAll(".project-button");
    for (var i = 0; i < button.length; i++) {
      if (i == e.target.dataset.index) {
        this.setState({
          project: projects[i].project,
          title: projects[i].title,
          description: projects[i].description,
          languages: projects[i].languages,
          gitlink: projects[i].gitlink,
          livelink: projects[i].livelink
        });
      }
    }
  }
  render() {
    return (
      <div id="projects" className="projects-main-container">
        <div className="projects-title-container">
          <h1 className="projects-title">Projects</h1>
        </div>
        <div className="projects-sub-container">
          <div className="project-display-container">
            <div className="project-img-container">
              <img src={this.state.project} alt=""></img>
            </div>
            <div className="project-information-container">
              <div className="title-container">
                <h2>{this.state.title}</h2>
              </div>
              <div className="description-container">
                <p>{this.state.description}</p>
              </div>
              <div className="languages-container">
                {this.state.languages.map(language => (
                  <p>{language}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="links-container">
            <a href={this.state.livelink}>See it live.</a>
            <a href={this.state.gitlink}>Look under the hood.</a>
          </div>
          <div className="project-list-title-container">
            <h4>Project List:</h4>
          </div>
          <div className="project-buttons-container">
            {projects.map((title, index) => (
              <button
                onMouseEnter={e => this.handleMouseHover(e)}
                className="project-button"
                data-index={index}
              >
                {projects[index].title}
              </button>
            ))}
          </div>
          <div className="seemore-button-container">
            <a href="https://github.com/ZanderBE">See more</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
