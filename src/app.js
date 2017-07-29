import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import createBrowserHistory from 'history/es/createBrowserHistory';
import { syncHistory } from 'redux-simple-router';

// import article from './reducers/article';
// import PublishingApp from './layouts/PublishingApp';
import Root from './containers/Root';
import configStore from './store/configStore';

const history = createBrowserHistory();
export const store = configStore(window.__INITIAL_STATE__);

const reduxRouterMiddleware = syncHistory(history);
reduxRouterMiddleware.listenForReplays(store);

render(
  <Root
    history={history}
    store={store}
  />,
  document.getElementById('root')
);
