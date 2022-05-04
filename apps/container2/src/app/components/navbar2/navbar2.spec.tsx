import { render } from '@testing-library/react';

import Navbar2 from './navbar2';

describe('Navbar2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navbar2 />);
    expect(baseElement).toBeTruthy();
  });
});
