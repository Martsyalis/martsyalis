import React, { PureComponent } from 'react';
import './Projects.css';

export default class Project extends PureComponent {
  state = {
    isActive: false
  };

  componentDidMount() {
    window.addEventListener('animationend', this.handleTransitionEnd);
  }

  handleTransitionEnd = event => {
    if (event.animationName === 'fadeoutAndShrink') {
      event.target.classList.add('hidden');
    }
  };

  componentWillUnmount() {
    window.removeEventListener('animationend', this.handleTransitionEnd);
  }

  render() {

    const { project, className } = this.props;
    console.log(project.title, className);
    return (
      <div
        style={{ backgroundImage: `url(${project.img})` }}
        className={`project-tile-div ${className}`}
      >
        <a target="_blank" href={project.url}>
          <div>
            <div className="tile-curtain">
              <div className="hover-top">{project.title}</div>
              <div className="hover-bottom">{project.tech}</div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
