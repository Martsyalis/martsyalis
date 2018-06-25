import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import './About.css';
import Home from './Home';
import face from '../assets/face.jpeg';
import { Context } from '../app/MyProvider';
import Lex from './Lex';

class About extends PureComponent {
  state = { seenHome: false };

  render() {
    const atHome = this.props.history.location.pathname === '/home';
    return (
      <Context.Consumer>
        {context => (
          <div
            className={`${atHome && context.state.seenHome && 'about-parent'}`}
          >
            {atHome && !context.state.seenHome && <Home />}
            {context.state.showNav && (
              <div className="about-div">
                <img src={face} alt="" className="about-img" />
                <Lex />
              </div>
            )}
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default withRouter(About);
