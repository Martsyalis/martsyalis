import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

export const Context = React.createContext();

class MyProvider extends PureComponent {
  state = {
    showNav: false,
    seenHome: false
  };

  handleShowNav = () => this.setState({ showNav: true });
  handleSeenHome = () => this.setState({ seenHome: true });

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          handleShowNav: this.handleShowNav,
          handleSeenHome: this.handleSeenHome
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default withRouter(MyProvider);
