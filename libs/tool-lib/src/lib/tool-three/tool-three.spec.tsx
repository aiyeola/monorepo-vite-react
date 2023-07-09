import { render } from '@testing-library/react';

import ToolThree from './tool-three';

describe('ToolThree', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ToolThree />);
    expect(baseElement).toBeTruthy();
  });
});
