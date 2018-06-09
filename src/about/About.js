import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './About.css';
import Home from '../home/Home';
import face from '../assets/face.jpeg';
import { Context } from '../app/MyProvider';

class About extends PureComponent {

  state = { seenHome: false }

  render(){
    const atHome = this.props.history.location.pathname==='/home';
    return (
      <Context.Consumer>
        {(context) =>(
          <div className="about-parent">
            {atHome && !context.state.seenHome && <Home /> }
            <div className="about-div">
              <img src={face} alt="" className="about-img" />
              
            </div>
          </div>
        )}
      </Context.Consumer>
    );
  }
} 

export default withRouter(About);