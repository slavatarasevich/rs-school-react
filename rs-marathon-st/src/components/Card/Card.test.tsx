import { render, screen } from '@testing-library/react';
import Card from './index';

const props = {
  setId: 1,
  open: true,
  img: 'test-img.png',
  name: 'Test Name',
  id: 'card-id',
};

describe('Card component', () => {
  test('renders image with correct src', () => {
    render(<Card {...props} />);
    const imgElement = screen.getByText('Test Name');
    expect(imgElement).toBeInTheDocument();
  });

  test('renders name', () => {
    render(<Card {...props} />);
    const nameElement = screen.getByText('Test Name');
    expect(nameElement).toBeInTheDocument();
  });
});
