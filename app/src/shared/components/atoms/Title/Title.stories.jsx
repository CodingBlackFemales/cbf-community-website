import React from 'react';

import { storiesOf } from '@storybook/react';

import Title from '.';

storiesOf('Atoms', module).add('Title', () => <Title text={'Blog'} />);
