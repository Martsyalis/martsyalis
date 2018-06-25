import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import './Home.css';
import tower from '../assets/tower.jpg';
import ArrowOne from 'react-icons/lib/io/android-arrow-forward';

import { Context } from '../app/MyProvider';

class Home extends PureComponent {
  state = { clicked: false };

  handleDown = (handleShowNav, handleSeenHome) => {
    this.setState({ clicked: true });
    handleShowNav();
    setTimeout(handleSeenHome, 1000);
  };

  render() {
    return (
      <Context.Consumer>
        {context => (
          <div className={`home-div ${this.state.clicked && 'transition'}`}>
            <img className="home-img" src={tower} alt="main" />
            <div className="home-box-parent">
              <div className="home-box">
                <p className="home-name">Maryus Martsyalis</p>
                <p className="home-job">Full Stack JS Developer</p>
                <p
                  className="arrow"
                  onClick={() =>
                    this.handleDown(
                      context.handleShowNav,
                      context.handleSeenHome
                    )
                  }
                >
                  check out my work
                  <ArrowOne
                    className={`down-arrow ${this.state.clicked &&
                      'down-arrow-animation'}`}
                  />
                </p>
              </div>
            </div>
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default withRouter(Home);
