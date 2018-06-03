import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';


export default class About extends PureComponent {

  render(){
    return (
      <div>
        <div>About me</div>
        <Link to='/projects'>Projects</Link>
      </div>
    );
  }
} 