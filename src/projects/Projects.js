import React, { PureComponent } from 'react';
import './Projects.css';
import Project from './Project';
import { projects } from './project-details';
import Tabs from './Tabs';

export default class Projects extends PureComponent {
  state = {
    selected: false,
    selection: ' ',
    newTitles: '',
    removedTitles: ''
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selection !== this.state.selection) {
      let newTitles = '';
      let removedTitles = '';

      projects.map(project => {
        if (
          !project.tech.includes(prevState.selection) &&
          project.tech.includes(this.state.selection)
        ) {
          newTitles += ` ${project.title} `;
        }
        if (
          !project.tech.includes(this.state.selection) &&
          project.tech.includes(prevState.selection)
        ) {
          removedTitles += ` ${project.title} `;
        }
      });

      this.setState({ newTitles, removedTitles });
    }
  }

  handleSelect = selection => {
    this.setState({ selected: true, selection: selection });
  };

  isSelected = project => {
    return project.tech.includes(this.state.selection);
  };

  handleDelay = title => {
    if (this.state.removedTitles) return 'display-project-with-delay';
    if (this.state.newTitles.includes(title))
      return 'display-project-without-delay';
    return 'display-project-with-delay';
  };

  render() {
    const projectsComponents = projects.map((project, i) => (
      <Project
        className={`${
          this.isSelected(project)
            ? `${this.handleDelay(project.title)}`
            : 'hide-project'
        }`}
        project={project}
        key={i}
      />
    ));
    return (
      <div className="projects-page-child">
        <Tabs
          handleSelect={this.handleSelect}
          selection={this.state.selection}
        />
        <div className="projects-parent">
          <div className="projects-aunt">
            <div className="project-flex">
              {projects.length && projectsComponents}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
