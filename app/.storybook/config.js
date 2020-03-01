import { addDecorator, configure } from '@storybook/react';
import '../src/index.css';

import ThemeWrapper from './ThemeWrapper';
addDecorator(ThemeWrapper);

const req = require.context('../src', true, /\.stories\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
