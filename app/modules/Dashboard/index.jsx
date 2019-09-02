import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  render() {
    // if (this.props.isLoading) {
    //   return <Loading />;
    // }
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

Dashboard.propTypes = {
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    isLoading: state.homepage.get('isLoading'),
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
