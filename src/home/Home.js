import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Home.css';

console.log('something');
class Home extends PureComponent {

  render(){
    return(
      <div className="home-div">
        Home;
      </div>
    );
  }
}

export default withRouter(Home);