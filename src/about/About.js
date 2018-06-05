import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './About.css';
import Home from '../home/Home';

class About extends PureComponent {

  render(){
    return (
      <div className="about-parent">
        <Home handleShowNav={this.props.handleShowNav}/>
        <div className='about-div'>About me</div>
      </div>
    );
  }
} 

export default withRouter(About);