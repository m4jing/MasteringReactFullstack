import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Falcor from 'falcor';

import falcorModel from '../falcorModel';

const mapStateToProps = (state) => ({
  ...state
});
const mapDispatchToProps = (dispatch) => ({});

class LoginView extends Component {
  render() {
    return (
      <div>
        <h1>Login View</h1>
        <p>From goes here</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
