import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import callbackHandlerEnums from 'constants/callbackHandler';
import SelectRelationships from './Relationships';

const styles = theme => ({
  container: {
    marginTop: 56,
    height: '100vh',
  },
});

class Content extends React.Component {
  componentDidMount() {
    if (this.props.user.get('contacts').size === 0) {
      this.props.callbackHandler(callbackHandlerEnums.FETCH_RELATIONSHIPS);
    }
  }

  render() {
    const { user, relationships } = this.props;

    return (
      <div className={this.props.classes.container}>
        {user.get('contacts').size === 0 && (
          <SelectRelationships
            activeIndex={this.props.activeIndex}
            relationships={relationships}
            callbackHandler={this.props.callbackHandler}
          />
        )}
      </div>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object,
  user: PropTypes.object,
  callbackHandler: PropTypes.func,
  activeIndex: PropTypes.number,
  relationships: PropTypes.object,
};

export default withStyles(styles)(Content);
