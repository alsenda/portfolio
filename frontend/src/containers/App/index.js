import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Header from '../../components/Header';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';


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
      <div className='app-wrapper'>
        <Header />
      </div>
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