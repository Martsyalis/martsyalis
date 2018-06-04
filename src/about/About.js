import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './About.css';

class About extends PureComponent {

  render(){
    return (
      <div>
        <div className='about-div'>About me</div>
      </div>
    );
  }
} 

export default withRouter(About);