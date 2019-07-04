import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Index from './views/index';
import Tema1 from './views/tema1';


const Router = () => (
  <Switch>
    <Route
      path="/"
      component={Index}
      exact
    />
    <Route
      path="/tema1"
      component={Tema1}
      exact
    />
  </Switch>
);

export default Router;