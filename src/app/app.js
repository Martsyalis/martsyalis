import React, { PureComponent } from 'react';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
export default class App extends PureComponent {

  render(){
    console.log('we gtot to app');
    return (
      <Router>
        <Routes />
      </Router>
    );
    
  }
} 