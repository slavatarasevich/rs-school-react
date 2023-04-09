import { render } from '@testing-library/react';
import Notification from './index';

describe('Notification', () => {
  it('should render the notification with correct content', () => {
    const { getByText } = render(<Notification />);
    expect(getByText('Character was not found, please try another name')).toBeInTheDocument();
  });
});
