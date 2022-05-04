import { render } from '@testing-library/react';

import Selectoption from './selectoption';

describe('Selectoption', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Selectoption />);
    expect(baseElement).toBeTruthy();
  });
});
