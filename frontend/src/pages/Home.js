import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Work from '../components/Work';

export class Home extends Component {
  static propTypes = {
    prop: PropTypes
  }

  workList = this.props.works.map(work => {
    return <Work key={work.id} {...work} />
  });

  render() {
    return (
      <div>
        Home page
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  works: state.works,
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
