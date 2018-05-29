import React, { PureComponent } from "react";
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';


export default class Search extends PureComponent {

  render() {

    return (
      <div style={{ width: '100vw', overflowX: 'hidden', position: 'fixed' }}>
        <Pager
          getPosition={(match, location) => Math.min(2,location.pathname.split('/').length - 2)}
          master={<SearchComponent/>} 
          detail={
            <Route exact path="/search/:id" render={({ match }) => <Property id={match.params.id}/>}/>
          }
          extended={
            <Switch>
              <Route path="/search/:id/makeOffer" render={({ match }) => <MakeOffer id={match.params.id}/>}/>
              <Route exact path="/search/:id/scheduleTour" render={({ match }) => <ScheduleTour id={match.params.id}/>}/>
            </Switch>
          }
        />
      </div>
    );
  }
}