import { render } from '@testing-library/react';

import GessaUpload from './gessa-upload';

describe('GessaUpload', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GessaUpload />);
    expect(baseElement).toBeTruthy();
  });
});
