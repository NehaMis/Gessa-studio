import { render } from '@testing-library/react';

import Card1 from './card1';

describe('Card1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card1 />);
    expect(baseElement).toBeTruthy();
  });
});
