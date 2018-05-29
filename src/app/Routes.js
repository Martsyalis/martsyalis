import React, { PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPager from '../main/Main';
 
export default class Routes extends PureComponent{  
  render(){
    console.log('we got to routes');
    return(
      <Switch>
        <Route path="/" component={MainPager} />
        <Route path="/2323" component={MainPager} />
        <Route path="/1212" component={MainPager} />
        <Redirect to="/" />
      </Switch>
    );
  }
}
