import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';


export default class About extends PureComponent {

  render(){
    console.log('about');
    return (
      <div>
        <div>About me</div>
        <Link to='/projects'>Projects</Link>
      </div>
    );
  }
} 