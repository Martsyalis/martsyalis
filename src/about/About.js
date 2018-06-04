import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';


class About extends PureComponent {

  render(){
    return (
      <div>
        <div>About me</div>
        <Link to='/projects'>Projects</Link>
      </div>
    );
  }
} 

export default withRouter(About);