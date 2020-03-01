import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../src/theme';

export default function themeWrapper(storyFn) {
  return <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;
}
