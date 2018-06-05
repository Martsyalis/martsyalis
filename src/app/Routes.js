import React, { PureComponent } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Main from '../main/Main';
import Home from '../home/Home';

class Routes extends PureComponent{  
  render(){
    return(
      <Switch>
        <Route exact path="/" render={() =><Redirect to="/splash" />} />
        <Route path='/splash' render={()=><Home />} />
        <Route path='/home' render={Main} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default withRouter(Routes);
