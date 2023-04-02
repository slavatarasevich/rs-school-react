import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './index';

describe('Header', () => {
  test('renders header with nav links', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Form')).toBeInTheDocument();
    expect(getByText('About us')).toBeInTheDocument();
  });
});
