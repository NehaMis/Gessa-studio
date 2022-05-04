import { render } from '@testing-library/react';

import ChartBox from './chart-box';

describe('ChartBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChartBox />);
    expect(baseElement).toBeTruthy();
  });
});
