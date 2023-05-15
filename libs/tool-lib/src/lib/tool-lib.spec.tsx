import { render } from '@testing-library/react';

import ToolLib from './tool-lib';

describe('ToolLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ToolLib />);
    expect(baseElement).toBeTruthy();
  });
});
