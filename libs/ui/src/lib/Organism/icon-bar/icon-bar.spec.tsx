import { render } from '@testing-library/react';

import IconBar from './icon-bar';

describe('IconBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IconBar />);
    expect(baseElement).toBeTruthy();
  });
});
