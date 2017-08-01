import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Falcor from 'falcor';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';
// import { Snackbar } from 'material-ui';

import falcorModel from '../falcorModel';
import LoginForm from '../components/LoginForm';

const mapStateToProps = (state) => ({
  ...state
});
const mapDispatchToProps = (dispatch) => ({});

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = {
      error: null
    }
  }

  async login(credentials) {
    console.info('credentials', credentials);

    await falcorModel.call(['login'], [credentials]).then((result) => result);

    const token = await falcorModel.getValue('login.token');
    // const token = await falcorModel.getValue('login.token').then((res) => res);
    console.info('token', token);

    if (token == 'INVALID') {
      const err = await falcorModel.getValue('login.error');
      this.setState({
        error: err
      });

      return;
    }

    if (token) {
      const username = await falcorModel.getValue('login.username');
      const role = await falcorModel.getValue('login.role');

      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      localStorage.setItem('role', role);

      this.props.history.pushState(null, '/dashboard');
    }

    return;
  }
  render() {
    return (
      <div>
        <h1>Login View</h1>
        <div style={{maxWidth: 450, margin: '0 auto'}} >
          <LoginForm
            onSubmit={this.login}
          />
        </div>
        <MuiThemeProvider>
          <Snackbar
            autoHideDuration={4000}
            open={!!this.state.error}
            message={this.state.error || ''}
            onRequestClose={() => null}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
