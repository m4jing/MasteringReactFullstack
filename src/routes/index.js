import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CoreLayout from '../layouts/CoreLayout';
import PublishingApp from '../layouts/PublishingApp';
import LoginView from '../views/LoginView';
import DashboardView from '../views/DashboardView';

export default (
  <CoreLayout>
    <Route component={PublishingApp} path='/' name='home' />
    <Route component={LoginView} path='/login' name='login' />
    <Route component={DashboardView} path='/dashboard' name='dashboard' />
  </CoreLayout>
);
