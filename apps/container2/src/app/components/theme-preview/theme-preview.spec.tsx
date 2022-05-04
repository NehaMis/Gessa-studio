import { render } from '@testing-library/react';

import ThemePreview from './theme-preview';

describe('ThemePreview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< ThemePreview />);
    expect(baseElement).toBeTruthy();
  });
});
