import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import history from './history';

import loadable from '@loadable/component'
const Home = loadable(() => import('./Home'));
const NotFound = loadable(() => import('./Shared/NotFound/NotFound'));

const Main = () => (
  <main>
    <Switch history={history}>
      <Route exact path="/" component={Home}/>
      <Route path="*" component={NotFound}/>
      <Redirect from="*" to="/404"/>
    </Switch>
  </main>
);

export default Main;
