import React from 'react';
import {IndexRoute, Route} from 'react-router';

import {App} from 'screens';
import {Dashboard, Checkout, NotFound} from 'screens/App/screens';

export default (
  <Route path="/" component={App} breadcrumbName="Home">
    { /* Home (main) route */ }
    <IndexRoute component={Checkout} />

    { /* Routes */ }
    <Route path="/checkout" component={Checkout} />
    <Route path="/dashboard" component={Dashboard} />

    { /* Catch all route */ }
    <Route path="/*" component={NotFound} status={404} breadcrumbIgnore />
  </Route>
);
