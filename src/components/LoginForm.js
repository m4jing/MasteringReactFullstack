import React, { Component } from 'react';
import Formsy from 'formsy-react';
// import { RaisedButton, Paper } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DefaultInput from './DefaultInput';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Formsy.Form onSubmit={this.props.onSubmit} >
        <MuiThemeProvider>
          <Paper zDepth={1} style={{padding: 32}} >
            <h3>Log in</h3>
            <DefaultInput
              onChange={(event) => {}}
              name='username'
              title='Username (admin)'
              required
            />
            <DefaultInput
              onChange={(event) => {}}
              type='password'
              name='password'
              title='Password (123456)'
              required
            />
            <div style={{marginTop: 24}} >
              <RaisedButton
                secondary={true}
                type='submit'
                label='Log in'
                style={{margin: '0 auto', display: 'block', width: 150}}
              />
            </div>
          </Paper>
        </MuiThemeProvider>
      </Formsy.Form>
    );
  }
}
