import React, { PureComponent } from 'react';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import MenuBar from './header/MenuBar';
import styles from './App.css';

export default class App extends PureComponent {

  render(){
    return (
      <Router>
        <div>
          <header>
            <MenuBar/>
          </header>
          <main id='main-container'>
            <Routes/>
          </main>
        </div>
      </Router>
    );
    
  }
} 