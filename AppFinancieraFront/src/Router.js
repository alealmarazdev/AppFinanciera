import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Index from './views/index';
import Content from './views/content'

import ThemeWordOne from './views/themeWordOne/index'
import Theme from './views/themes';
import Game1 from './views/game1'
import Blog from './views/blog';

const Router = () => (
  <Switch>
    <Route
      path="/"
      component={Index}
      exact
    />
     <Route
      path="/content"
      component={Content}
      exact
    />
     
     <Route
      path="/theme/Word/One"
      component={ThemeWordOne}
      exact
    />
    <Route
      path="/theme/:id"
      component={Theme}
      exact
    />
    <Route
      path="/theme/:number/game/:gamenumber"
      component={Game1}
      exact
    />

    <Route
      path="/blog"
      component={Blog}
      exact
    />
  </Switch>
);

export default Router;