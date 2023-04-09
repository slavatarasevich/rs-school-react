import { render } from '@testing-library/react';
import Spinner from './index';

describe('Spinner', () => {
  it('should render the spinner', () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector('#load')).toBeInTheDocument();
  });
});
