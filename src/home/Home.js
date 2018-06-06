import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Home.css';
import tower from '../assets/tower.jpg';
import ArrowDown from 'react-icons/lib/io/android-arrow-down';


class Home extends PureComponent {
  
  state={ clicked:false }
  
  handleDown= ()=> {
    this.setState({ clicked: true });
    this.props.handleShowNav();
  };

  render(){
    console.log('clicked', this.state.clicked);
    return(
      <div className={`home-div ${this.state.clicked && 'transition'}`} onClick={this.handleDown}> 
        <img className="home-img" src={tower} alt="main" />
        <div className="home-box">
          <p className="home-title">Welcome, Lets Get Started!</p>
          <ArrowDown  className="home-icon" size={22}/>
        </div>

      </div>
    );
  }
}

export default withRouter(Home);