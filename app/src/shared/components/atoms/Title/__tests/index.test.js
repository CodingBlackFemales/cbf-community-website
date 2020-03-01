import React from 'react';
import { cleanup } from '@testing-library/react';

import Title from '..';
import {
  mountWithTheme,
  renderWithTheme,
} from '../../../../utils/test/testHelpers';

describe('<Title', () => {
  afterEach(cleanup);
  const titleComponent = <Title label={'A title'} tagline={'A tagline'} />;
  const titleComponentNoTitle = <Title label={'A title'} />;

  it('matches the snapshot, when the label and tagline props exist', () => {
    const { asFragment } = renderWithTheme(titleComponent);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches the snapshot, when the label prop exists and the tagline does not exist', () => {
    const { asFragment } = renderWithTheme(titleComponentNoTitle);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the header text and tagline', () => {
    const component = mountWithTheme(titleComponent);

    const labelText = component.find('.title__label-text');
    const taglineText = component.find('.title__tagline-text');

    expect(labelText.exists()).toBe(true);
    expect(taglineText.exists()).toBe(true);
  });

  it('displays the header text only', () => {
    const component = mountWithTheme(titleComponentNoTitle);

    const labelText = component.find('.title__label-text');
    const taglineText = component.find('.title__tagline-text');

    expect(labelText.exists()).toBe(true);
    expect(taglineText.exists()).toBe(false);
  });
});
