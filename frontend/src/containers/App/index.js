import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';

import * as actions from '../../store/actions';

class App extends Component {
  renderButton = () => {
    return (this.props.auth)
      ? <button
          onClick={() => this.props.changeAuth(false)}>
            Sign out
        </button>
      : <button
          onClick={() => this.props.changeAuth(true)}>
            Sign in
        </button>
      ;
  }

  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to='/'>Home</Link>
          <Link to='/asdf78a9sd'>Random</Link>
        </li>
        <li>{ this.renderButton() }</li>
      </ul>
    )
  }

  render() {
    return (
      <div>
        { this.renderHeader() }
        <Switch>
          
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, actions)(App);