import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Route, IndexRoute } from 'react-router';

import CoreLayout from '../layouts/CoreLayout';
import PublishingApp from '../layouts/PublishingApp';
import LoginView from '../views/LoginView';

// export default (
//   <Route component={CoreLayout} path='/'>
//     <IndexRoute component={PublishingApp} name='home' />
//     <Route component={LoginView} path='login' name='login' />
//   </Route>
// );
export default (
  <CoreLayout>
    <Route component={PublishingApp} path='/' name='home' />
    <Route component={LoginView} path='/login' name='login' />
  </CoreLayout>
);
