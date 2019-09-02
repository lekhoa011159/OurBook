import React from 'react';
import { FlexWrapper } from 'components/Wrappers';
import callbackHandlerEnums from 'constants/callbackHandler';

// components
import HeroImage from './HeroImage';
import SignupForm from './SignupForm';

class Homepage extends React.Component {
  state = {
    user: {},
  };

  callbackHandler = (type, data) => {
    switch (type) {
      case callbackHandlerEnums.CHANGE_INPUT:
        this.handleChangeInput(data);
        break;
      default:
        return 0;
    }
  };

  handleChangeInput = inputSource => {
    this.setState({
      [inputSource.key]: inputSource.value,
    });
  };

  render() {
    return (
      <FlexWrapper maxWidth={1200}>
        {/* <HeroImage /> */}
        <SignupForm
          user={this.state.user}
          callbackHandler={this.callbackHandler}
        />
      </FlexWrapper>
    );
  }
}

export default Homepage;
