import React from 'react';
// import Route from './route/route';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import * as content from './content/index';

import { route } from '../unit/route';

import Text from './text/text.jsx'; 

const App = () => {
  return (
    <div>
      <Text></Text>
    </div>
  );
  // const routeList = route()();
  // return (
  //   <Router>
  //     <Switch>
  //       {console.log(routeList, '-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-')}
  //       {
  //         routeList.map(({ path, exact, component }, idx) => {
  //           return (
  //             <Route key={idx} path={path} exact={exact} component={content[component]}></Route>
  //           );
  //         })
  //       }
  //     </Switch>
  //   </Router>
  // );
};

export default App;
