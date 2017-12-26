import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Landing from '../containers/Landing';
import Dashboard from '../containers/Dashboard';


export default () => (
  <BrowserRouter>
    <div>
        <Route exact path="/" component={Landing} />
   	    <Route exact path="/dashboard" component={Dashboard} />
    </div>
  </BrowserRouter>
);
