import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/es/createBrowserHistory';
import { syncHistory } from 'redux-simple-router';

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
