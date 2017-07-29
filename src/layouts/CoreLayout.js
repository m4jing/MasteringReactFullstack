import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router';

export default class CoreLayout extends Component {
  // static propTypes = {
  //   children: React.PropTypes.element
  // }
  // state = {  }
  render() {
    return (
      <div>
        <span>
          <Link to='/login'>Login</Link> | <Link to='/'>Home Page</Link>
        </span>
        <div>
          {
            this.props.children
          }
        </div>
      </div>
    );
  }
}
