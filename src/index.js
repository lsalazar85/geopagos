import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import * as reducers from './reducers';
import routes from './config/routes';



const store = createStore(
  combineReducers(reducers)
);


const render = (RootApp) => {
  ReactDOM.render(<AppContainer>
    <Provider store={store}>
      <RootApp />
    </Provider>
  </AppContainer>,
  document.getElementById('mount'),
  );
};

render(routes);

if (module.hot) {
  module.hot.accept('./config/routes', () => {
    render(routes);
  });
}

require('./styles/style.scss');
