import React from 'react';

import { storiesOf } from '@storybook/react';

import Tagline from '.';

storiesOf('Atoms', module).add('Tagline', () => (
  <Tagline text={'A tagline | with some text'} />
));
