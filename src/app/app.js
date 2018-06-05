import React, { PureComponent } from 'react';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import MenuBar from './header/MenuBar';
import './App.css';

export default class App extends PureComponent {

  state = {
    showNav: false
  }

  handleShowNav = () => this.setState({ showNav: true });

  render(){
    console.log('in app', this.state.showNav);
    return (
      <Router>
        <div>
          <header>
            <MenuBar showNav={this.state.showNav}/>
          </header>
          <main>
            <Routes handleShowNav={this.handleShowNav}/>
          </main>
        </div>
      </Router>
    );
    
  }
} 