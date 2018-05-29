import React, { PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from '../main/Main';
 
export default class Routes extends PureComponent{  
  render(){
    return(
      <Switch>
        <Route path="/" component={Main} />
        {/* <Redirect to="/about" /> */}
        {/* <Route exact path="/about" component={Main} /> */}
      </Switch>
    );
  }
}
