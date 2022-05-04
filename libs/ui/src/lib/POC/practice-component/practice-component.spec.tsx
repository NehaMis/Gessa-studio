import { render } from '@testing-library/react';

import PracticeComponent from './practice-component';

describe('PracticeComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< PracticeComponent />);
    expect(baseElement).toBeTruthy();
  });
});
