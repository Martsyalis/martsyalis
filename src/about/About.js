import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './About.css';
import Home from '../home/Home';


class About extends PureComponent {

  render(){
    return (
      <div>
        {/* <Home/> */}
        <div className='about-div'>About me</div>
      </div>
    );
  }
} 

export default withRouter(About);