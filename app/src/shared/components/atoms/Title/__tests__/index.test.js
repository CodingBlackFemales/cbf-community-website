import React from 'react';
import { cleanup } from '@testing-library/react';

import Title from '..';
import {
  mountWithTheme,
  renderWithTheme,
} from '../../../../utils/test/testHelpers';

describe('<Title', () => {
  afterEach(cleanup);
  const titleComponent = <Title label={'A title'} />;

  it('matches the snapshot', () => {
    const { asFragment } = renderWithTheme(titleComponent);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the header text and tagline', () => {
    const component = mountWithTheme(titleComponent);

    const titleText = component.find('.title__text');

    expect(titleText.exists()).toBe(true);
  });
});
