import { render } from '@testing-library/react';

import FlowRendererChart from './flow-renderer-chart';

describe('FlowRendererChart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlowRendererChart />);
    expect(baseElement).toBeTruthy();
  });
});
