import { render } from '@testing-library/react';

import MultilineTextUser from './multiline-text-user';

describe('MultilineTextUser', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< MultilineTextUser />);
    expect(baseElement).toBeTruthy();
  });
});
