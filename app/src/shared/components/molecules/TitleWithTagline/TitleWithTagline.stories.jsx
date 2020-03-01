import React from 'react';

import { storiesOf } from '@storybook/react';

import TitleWithTagline from '.';

storiesOf('Molecules', module).add('Title With Tagline', () => (
  <TitleWithTagline titleText={'Blog'} taglineText={'A tagline'} />
));
