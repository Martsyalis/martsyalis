import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';



export default class Project extends PureComponent{

  componentDidMount(){
    window.addEventListener('animationend', this.handleTransitionEnd);

  }
  handleTransitionEnd=(event)=>{
    if(event.animationName === 'fadeoutAndShrink'){
      event.target.classList.add('hidden');
    }
  }

  componentWillUnmount(){
    window.removeEventListener('animationend', this.handleTransitionEnd);
  }
  render(){
    const { project, className } = this.props;
    return(
      <div style={{ backgroundImage:`url(${project.img})` }} className={`project-tile-div ${className}`}>
        <Link to={project.url}>
          <div>
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