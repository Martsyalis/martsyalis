import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';



export default class Project extends PureComponent{

  render(){
    return(
      <div style={{ backgroundImage:`url(${this.props.img})` }} className="tile is-child box custom-tile">
        
        
        <Link to={`projects${this.props.img}`}>
          <div className='project-tile' src={this.props.img} alt={this.props.alt}>
            <div className='tile-curtain'>
              <div className='hover-top'>
                Top
              </div>
            </div>
            
          </div>
        </Link>
      </div>
    );
  }
}