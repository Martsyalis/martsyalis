import React, { PureComponent } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Main from '../main/Main';
 
class Routes extends PureComponent{  
  render(){
    console.log('Routes is rendering');
    return(
      <Switch>
        <Route path='/' render={Main}/>
      </Switch>
    );
  }
}

export default withRouter(Routes);
