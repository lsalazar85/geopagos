import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Landing from '../components/Landing';
import Dashboard from '../components/Dashboard';


export default () => (
  <BrowserRouter>
    <div>
   	  <Route exact path="/" component={Dashboard} />
      <Route exact path="/landing" component={Landing} />
    </div>
  </BrowserRouter>
);
