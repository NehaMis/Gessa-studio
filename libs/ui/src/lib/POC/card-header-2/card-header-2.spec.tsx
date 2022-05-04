import { render } from '@testing-library/react';

import CardHeader2 from './card-header-2';

describe('CardHeader2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< CardHeader2 />);
    expect(baseElement).toBeTruthy();
  });
});
