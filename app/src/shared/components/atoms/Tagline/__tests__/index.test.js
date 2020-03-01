import React from 'react';
import { cleanup } from '@testing-library/react';

import Tagline from '..';
import {
  mountWithTheme,
  renderWithTheme,
} from '../../../../utils/test/testHelpers';

describe('<Tagline', () => {
  afterEach(cleanup);
  const taglineComponent = <Tagline text={'A tagline'} />;

  it('matches the snapshot, when the label and tagline props exist', () => {
    const { asFragment } = renderWithTheme(taglineComponent);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the tagline text', () => {
    const component = mountWithTheme(taglineComponent);

    const taglineText = component.find('.tagline__text');

    expect(taglineText.exists()).toBe(true);
  });
});
