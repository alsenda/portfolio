import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class NotFound extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        Page not found
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
