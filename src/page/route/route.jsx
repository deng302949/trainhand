import React from 'react';
import NotFound from '../notFount/notFount';

import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import * as content from '../content';

const renderRoute = (route) => {
  const props = {
    key: route.key,
    exact: route.exact,
    path: route.path,
  };

  if (route.redirect) {
    props.render = () => <Redirect to={route.redirect} />;
  } else {
    props.component = content[route.component];
  }
  return <Route {...props} />
};

export default (props) => {
  return (
    <Switch>
      {
        props.routerList ? props.routerList.map(route => (
          renderRoute(route)
        )) : null
      }
      <Route component={NotFound} />
    </Switch>
  );
};

