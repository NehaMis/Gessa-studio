import { render } from '@testing-library/react';

import TableCellComponent from './table-cell-component';

describe('TableCellComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableCellComponent />);
    expect(baseElement).toBeTruthy();
  });
});
