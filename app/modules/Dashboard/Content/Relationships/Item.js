import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Button, Menu, MenuItem } from '@material-ui/core';
import { Favorite, MoreHoriz } from '@material-ui/icons';
import { Types } from '../constants';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'column wrap',
  },

  image: {
    width: 400,
    height: 300,
    display: 'block',
    margin: theme.spacing(1),
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    border: 1,
    borderRadius: 15,
  },

  moreInformation: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  threeDots: {
    alignSelf: 'flex-end',
    marginRight: theme.spacing(2),
  },
});

class SelectItem extends React.Component {
  state = {
    anchorEl: null,
  };

  setAnchorEl = e => {
    this.setState({
      anchorEl: e.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  handleShowMoreInfo = () => {
    this.props.callbackHandler(
      Types.VIEW_MORE_INFORMATION,
      this.props.userInfo,
    );
  };

  render() {
    const { url, classes } = this.props;
    return (
      <div className={classes.container}>
        <Button className={classes.threeDots} onClick={this.setAnchorEl}>
          <MoreHoriz />
        </Button>
        <div
          className={classes.image}
          style={{ backgroundImage: `url('${url}')` }}
        />
        <div className={classes.moreInformation}>
          <Button variant="contained" color="primary">
            Ghép
            <Favorite />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            keepMounted
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem dense onClick={this.handleShowMoreInfo}>
              Xem thêm
            </MenuItem>
            <MenuItem dense onClick={() => {}}>
              Chặn người này
            </MenuItem>
            <MenuItem dense onClick={() => {}}>
              Thêm vào danh sách chờ
            </MenuItem>
            {/* <Typography>{`${userInfo.firstName} ${
              userInfo.lastName
            }`}</Typography>
            <Typography>{userInfo.gender}</Typography>
            <Typography>{userInfo.country}</Typography> */}
          </Menu>
        </div>
      </div>
    );
  }
}

SelectItem.propTypes = {
  userInfo: PropTypes.object,
  classes: PropTypes.object,
  url: PropTypes.string,
  callbackHandler: PropTypes.func,
};

export default withStyles(styles)(SelectItem);
