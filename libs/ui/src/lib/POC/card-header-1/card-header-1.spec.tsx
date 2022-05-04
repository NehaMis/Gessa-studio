import { render } from '@testing-library/react';

import CardHeader1 from './card-header-1';

describe('CardHeader1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< CardHeader1 />);
    expect(baseElement).toBeTruthy();
  });
});
