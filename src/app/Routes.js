import React, { PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from '../main/Main';
 
export default class Routes extends PureComponent{  
  render(){
    return(
      <Switch>
        <Route path="/" component={Main} />
        {/* <Route path="/about" component={Main} /> */}
        {/* <Redirect to="/about" /> */}
      </Switch>
    );
  }
}
