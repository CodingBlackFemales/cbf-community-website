import React from 'react';
import { cleanup } from '@testing-library/react';

import TitleWithTagline from '..';
import {
  mountWithTheme,
  renderWithTheme,
} from '../../../../utils/test/testHelpers';

describe('<TitleWithTagline', () => {
  afterEach(cleanup);
  const titleWithTagline = (
    <TitleWithTagline titleText={'A title'} taglineText={'A tagline'} />
  );
  const titleNoTagline = <TitleWithTagline titleText={'A title'} />;

  it('matches the snapshot, when titleText and taglineText exist', () => {
    const { asFragment } = renderWithTheme(titleWithTagline);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches the snapshot, when titleText exists and taglineText does not exist', () => {
    const { asFragment } = renderWithTheme(titleNoTagline);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the title and tagline text', () => {
    const component = mountWithTheme(titleWithTagline);

    const title = component.find('Title');
    const tagline = component.find('Tagline');

    expect(title.exists()).toBe(true);
    expect(tagline.exists()).toBe(true);
  });

  it('displays the title text only', () => {
    const component = mountWithTheme(titleNoTagline);

    const title = component.find('Title');
    const tagline = component.find('Tagline');

    expect(title.exists()).toBe(true);
    expect(tagline.exists()).toBe(false);
  });
});
