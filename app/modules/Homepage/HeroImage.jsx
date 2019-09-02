import React from 'react';
import PropTypes from 'prop-types';
import { FlexedPanel } from 'components/Wrappers';

class HeroImage extends React.Component {
  render() {
    return (
      <FlexedPanel basis={50}>
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/OBaVg52wtTZ.png?_nc_x=Ij3Wp8lg5Kz"
          alt="hero"
        />
      </FlexedPanel>
    );
  }
}

export default HeroImage;
