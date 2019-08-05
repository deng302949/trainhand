import React from 'react';
import { NotFount } from '../content/index';
import { Route, Redirect, Switch } from 'react-router-dom';
import * as components from '../content/index';
import { routes } from '../../const/routeConfig';

export default (props) => {
  const renderRoute = (route) => {
    const routeList = {
      key: route.path,
      exact: route.exact,
      path: route.path,
    };

    if ( route.redirect ) { //从定向
      routeList.render = () => <Redirect to={route.redirect} />
    } else {
      routeList.component = components[route.component];
    };
    
    return <Route {...routeList} />;
  };
  
  return (
    <Switch>
      {
        routes ? routes.map(route => (
          renderRoute(route)
        )) : null
      }
      <Route component={NotFount} />
    </Switch>
  );
}