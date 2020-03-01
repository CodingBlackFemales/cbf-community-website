import React from 'react';
import { mount } from 'enzyme';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '../../../theme';

export const renderWithTheme = children => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

export const mountWithTheme = children => {
  return mount(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
