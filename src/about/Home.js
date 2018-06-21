import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import './Home.css';
import tower from '../assets/tower.jpg';
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
              <p className="home-position">Full Stack JS Developer</p>
            </div>
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default withRouter(Home);