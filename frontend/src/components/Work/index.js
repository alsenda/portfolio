import React, { Component } from 'react';

class Work extends Component {
  render() {
    return (
      <div>
        This is a work.
        ${this.props.title}
        ${this.props.description}
        ${this.props.image}
      </div>
    )
  }
};

export default Work;