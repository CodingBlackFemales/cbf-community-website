import React from 'react';
import { cleanup } from '@testing-library/react';

import Title from '..';
import {
  mountWithTheme,
  renderWithTheme,
} from '../../shared/utils/test/testHelpers';

describe('<Title', () => {
  afterEach(cleanup);

  it('matches the snapshot, when the label and tagline props exist', () => {
    const { asFragment } = renderWithTheme(
      <Title label={'A title'} tagline={'A tagline'} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches the snapshot, when the label prop exists and the tagline does not exist', () => {
    const { asFragment } = renderWithTheme(<Title label={'A title'} />);
    expect(asFragment()).toMatchSnapshot();
  });

  // it('displays the header text', () => {
  //   const appComponent = mountWithTheme(<App />);

  //   const header = appComponent.find('.app__header');

  //   expect(header.exists()).toBe(true);
  // });
});
