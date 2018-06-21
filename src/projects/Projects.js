import React, { PureComponent } from 'react';
import './Projects.css';
import Project from './Project';
import { projects } from './project-details';
import Tabs from './Tabs';

export default class Projects extends PureComponent {
  
  state ={
    selected: false,
    selection: ''
  }

  handleSelect=(selection)=>{
    this.setState({ selected: true, selection: selection });
  }

  isSelected = (project)=>{
    return project.tech.indexOf(this.state.selection) !== -1;
  }

  render(){
    const projectsComponents = projects.map((project, i)=>(
      <Project 
        className={`${this.isSelected(project)?'display-project': 'hide-project'}`}
        project={project}
        key={i}
      />
    ));
    return (
      <div className='projects-page-child' >
        <Tabs handleSelect={this.handleSelect} selection={this.state.selection} />
        <div className="projects-parent">
          <div className="project-flex">
            {projects.length && projectsComponents}
          </div>
        </div>
      </div>
    );
  }
} 