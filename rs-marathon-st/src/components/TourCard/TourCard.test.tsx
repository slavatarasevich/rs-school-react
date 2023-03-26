import { render, screen } from '@testing-library/react';
import TourCard from './index';

describe('TourCard', () => {
  it('renders the correct information', () => {
    const props = {
      title: 'Test Tour',
      date: '2022-01-01',
      type: 'Adventure',
      kidsAllowed: 'Yes',
      scas: 'Yes',
      imgPath: '/test.jpg',
    };

    render(<TourCard {...props} />);

    expect(screen.getByText('Test Tour')).toBeInTheDocument();
    expect(screen.getByText('Available from: 2022-01-01')).toBeInTheDocument();
    expect(screen.getByText('Tour type: Adventure')).toBeInTheDocument();
    expect(screen.getByText('Kids are allowed: Yes')).toBeInTheDocument();
    expect(screen.getByText('SCAS approved')).toBeInTheDocument();

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/test.jpg');
  });

  it('renders "Not approved by SCAS" when scas prop is "No"', () => {
    const props = {
      title: 'Test Tour',
      date: '2022-01-01',
      type: 'Adventure',
      kidsAllowed: 'Yes',
      scas: 'No',
      imgPath: '/test.jpg',
    };

    render(<TourCard {...props} />);

    expect(screen.getByText('Not approved by SCAS')).toBeInTheDocument();
  });
});
