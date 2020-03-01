import React from 'react';
import { cleanup } from '@testing-library/react';

import App from '..';
import {
  mountWithTheme,
  renderWithTheme,
} from '../../shared/utils/test/testHelpers';

describe('<App', () => {
  afterEach(cleanup);

  it('matches the snapshot', () => {
    const { asFragment } = renderWithTheme(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the header text', () => {
    const appComponent = mountWithTheme(<App />);

    const header = appComponent.find('.app__header');

    expect(header.exists()).toBe(true);
  });
});
