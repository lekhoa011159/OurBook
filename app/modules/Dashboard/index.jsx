import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Loading } from 'components/Loading';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import callbackHandlerEnums from 'constants/callbackHandler';
import { RegularModal } from 'containers/Modal';
import { Types } from './Content/constants';
import Header from './Header';
import Content from './Content';
import { fetchRelationships } from './actions';
import saga from './saga';

class Dashboard extends React.Component {
  state = {
    modalOpen: false,
  };

  callbackHandler = (type, data) => {
    switch (type) {
      case callbackHandlerEnums.FETCH_RELATIONSHIPS:
        this.handleFetchRelationships();
        break;
      case Types.VIEW_MORE_INFORMATION:
        this.handleViewMore(data);
    }
  };

  onClose = () => {
    this.setState({
      modalOpen: false,
    });
  };

  handleViewMore = user => {
    this.setState({
      modalOpen: true,
      user,
    });
  };

  handleFetchRelationships = () => {
    this.props.fetchRelationships();
  };

  render() {
    if (this.props.isLoading) {
      return <Loading />;
    }

    return (
      <div>
        <Header />
        <Content
          user={this.props.user}
          relationships={this.props.relationships}
          callbackHandler={this.callbackHandler}
        />
        <RegularModal
          open={this.state.modalOpen}
          onClose={this.onClose}
          hasCloseButton
          headerTitle={`Xem thêm về ${this.state.user &&
            this.state.user.firstName + this.state.user.lastName}`}
        >
          <h1>Hello</h1>
        </RegularModal>
      </div>
    );
  }
}

Dashboard.propTypes = {
  isLoading: PropTypes.bool,
  user: PropTypes.object,
  fetchRelationships: PropTypes.func,
  relationships: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    isLoading: state.homepage.get('isLoading'),
    user: state.homepage.get('user'),
    relationships: state.dashboard.get('availableRelationships'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRelationships: () => {
      dispatch(fetchRelationships());
    },
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'dashboard', saga });

export default compose(
  withConnect,
  withSaga,
)(Dashboard);
