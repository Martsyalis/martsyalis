import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';



export default class Project extends PureComponent{

  render(){
    const { project } = this.props;
    return(
      <div style={{ backgroundImage:`url(${project.img})` }} className="tile is-child box custom-tile">
        
        
        <Link to={project.url}>
          <div className='project-tile'>
            <div className='tile-curtain'>
              <div className='hover-top'>
                {project.title}
              </div>
              <div className='hover-bottom'>
                {project.tech}
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}