import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './About.css';
import Home from '../home/Home';
import face from '../assets/face.jpeg';

class About extends PureComponent {

  state = { seenHome: false }

  componentWillUnmount(){
    //if pager is working this should never fire;
    console.log('unmounting');
  }
  render(){
    const atHome = this.props.history.location.pathname==='/home';
    return (
      <div className="about-parent">
        {atHome && <Home handleShowNav={this.props.handleShowNav} /> }
        <div className="about-div">
          <img src={face} alt="" className="about-img" />
          
        </div>
      </div>
    );
  }
} 

export default withRouter(About);