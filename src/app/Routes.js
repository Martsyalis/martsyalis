import React, { PureComponent } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Main from '../main/Main';
import Home from '../home/Home';

class Routes extends PureComponent{  
  render(){
    return(
      <Switch>
        <Route exact path="/" render={() =><Redirect to="/home" />} />
        <Route path='/home' 
          render={()=> <Main handleShowNav={this.props.handleShowNav} />} />
        {/* <Redirect to="/" /> */}
      </Switch>
    );
  }
}

export default withRouter(Routes);
