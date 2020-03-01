import React from 'react';

import { storiesOf } from '@storybook/react';

import Title from '.';

storiesOf('Shared Components', module).add('Title', () => (
  <Title label={'A title'} tagline={'A tagline'} />
));
