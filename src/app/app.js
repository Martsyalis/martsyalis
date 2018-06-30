import React, { PureComponent } from 'react';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import MenuBar from './header/MenuBar';
import './App.css';
import MyProvider from './MyProvider';
import '../assets/favicon.ico';



export default class App extends PureComponent {

  render(){
    return (
      <Router>
        <div>
          <MyProvider>
            <header>
              <MenuBar/>
            </header>
            <main>
              <Routes/>
            </main>
          </MyProvider>
        </div>
      </Router>
    );
    
  }
} 


