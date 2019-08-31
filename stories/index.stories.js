import React from 'react';

import { storiesOf, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

addParameters({
  options: {
    theme: themes.dark,
  },
});

storiesOf('Text', module).add('normal text', () => <p>Textf</p>);
