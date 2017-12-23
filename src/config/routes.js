import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Landing from '../components/Landing';
import Dashboard from '../components/Dashboard';


export default () => (
  <BrowserRouter>
    <div>
        <Route exact path="/" component={Landing} />
   	    <Route exact path="/dashboard" component={Dashboard} />
    </div>
  </BrowserRouter>
);
