import React, { PureComponent } from 'react';
import './Projects.css';
import Project from './Project';
import{ jdre, travel, weather, backOffice, fights, space } from './project-details';
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
    return (
      <div>
        <Tabs handleSelect={this.handleSelect} selection={this.state.selection} />
        <div className="project-flex">
          <Project 
            className={`${this.isSelected(jdre)?'display-project': 'hide-project'}`}
            project={jdre}
          />
          <Project project={travel}
            className={`${this.isSelected(travel)?'display-project': 'hide-project'}`}
          />
          <Project project={weather}
            className={`${this.isSelected(weather)?'display-project': 'hide-project'}`}
          />
          <Project project={backOffice}
            className={`${this.isSelected(backOffice)?'display-project': 'hide-project'}`}
          />
          <Project project={fights}
            className={`${this.isSelected(fights)?'display-project': 'hide-project'}`}
          />
          <Project project={space}
            className={`${this.isSelected(space)?'display-project': 'hide-project'}`}
          />
          
        </div>
      </div>
    );
  }
} 