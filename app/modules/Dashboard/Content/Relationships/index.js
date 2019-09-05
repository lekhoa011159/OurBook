import React from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'react-slideshow-image';
import { withStyles } from '@material-ui/styles';
import SelectItem from './Item';

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

class SelectRelationships extends React.Component {
  render() {
    return (
      <div className={this.props.classes.wrapper}>
        <Slide
          duration={3000}
          transitionDuration={200}
          autoplay={false}
          infinite
          indicators
          arrows
          style={{ width: 400 }}
        >
          {this.renderSlide(this.props.relationships)}
        </Slide>
      </div>
    );
  }

  renderSlide = relationships => {
    if (relationships.length !== 0) {
      return relationships.toJS().map(user => {
        const url = user.imageUrl;

        return (
          <SelectItem
            key={user.id}
            url={
              typeof url !== 'undefined'
                ? url
                : 'https://www.ctvalleybrewing.com/wp-content/uploads/2017/04/avatar-placeholder.png'
            }
            userInfo={user}
            callbackHandler={this.props.callbackHandler}
          />
        );
      });
    }
  };
}

SelectRelationships.propTypes = {
  relationships: PropTypes.object,
  classes: PropTypes.object,
  callbackHandler: PropTypes.func,
};

export default withStyles(styles)(SelectRelationships);
