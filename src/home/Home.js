import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import './Home.css';
import tower from '../assets/tower.jpg';
import ArrowDown from 'react-icons/lib/io/android-arrow-down';
import { Context } from '../app/MyProvider';


class Home extends PureComponent {
  
  state={ clicked:false }

  handleDown= (handleShowNav, handleSeenHome)=> {
    this.setState({ clicked: true });
    handleShowNav();
    setTimeout(handleSeenHome, 1000);
  };

  render(){
    return(
      <Context.Consumer>
        {(context) =>(
          <div className={`home-div ${this.state.clicked && 'transition'}`} onClick={()=>this.handleDown(context.handleShowNav, context.handleSeenHome)}> 
            <img className="home-img" src={tower} alt="main" />
            <div className="home-name-box">
              <p className="home-name">Maryus Martsyalis</p>
              <p className="home-position">Full Stack Developer</p>
            </div>
            <div className="home-box">
              <p className="home-title">Welcome, Enter my site!</p>
              {/* <ArrowDown  className="home-icon" size={22}/> */}
            </div>

          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default withRouter(Home);