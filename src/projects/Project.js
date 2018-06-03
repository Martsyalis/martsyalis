import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';



export default class Project extends PureComponent{

  render(){
    return(
      <div id='custom-tile' className="tile is-child box">
        <Link to={`projects${this.props.url}`}>
          <img className='project-tile' src={this.props.img} alt={this.props.alt}/>
        </Link>
      </div>
    );
  }
}