import React, { Fragment } from 'react';
import Route from './route/route';
import { HashRouter as Router, withRouter } from 'react-router-dom';
import { SiderMenu, Home } from './content/index';

let Content = (props) => {
  return (
    <Fragment>
      <Home />
      <SiderMenu {...props}/>
      <Route />
    </Fragment>
  );
}

Content = withRouter(Content);

let App = (props) => {
  return (
    <Router>
      <Content/>
    </Router>
  );
};

export default App;
