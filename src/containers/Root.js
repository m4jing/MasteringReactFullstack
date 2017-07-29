import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';

import routes from '../routes';

const noQueryKeyHistory = createHashHistory({
  queryKey: false
});

export default class Root extends Component {
  // static propTypes = {
  //   history: React.PropTypes.object.isRequired,
  //   store: React.PropTypes.object.isRequired
  // }
  render() {
    return (
      <Provider store={this.props.store} >
        <div>
          <Router history={noQueryKeyHistory} >
            {routes}
          </Router>
        </div>
      </Provider>
    );
  }
}
