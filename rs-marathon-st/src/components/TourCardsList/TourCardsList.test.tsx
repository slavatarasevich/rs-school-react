import { render, screen } from '@testing-library/react';
import TourCardsList from './index';

describe('TourCardsList', () => {
  it('renders the correct number of TourCard components', () => {
    const data = [
      {
        checkBoxValue: 'Yes',
        selectedR: 'Yes',
        selectValue: 'Adventure',
        inputDateValue: '2022-01-01',
        inputNameValue: 'Test Tour 1',
        title: 'Test Tour 1',
        date: '2022-01-01',
        type: 'Adventure',
        kidsAllowed: 'Yes',
        scas: 'Yes',
        imgPath: '/test1.jpg',
      },
      {
        checkBoxValue: 'No',
        selectedR: 'No',
        selectValue: 'Relaxing',
        inputDateValue: '2022-02-02',
        inputNameValue: 'Test Tour 2',
        title: 'Test Tour 2',
        date: '2022-02-02',
        type: 'Relaxing',
        kidsAllowed: 'No',
        scas: 'No',
        imgPath: '/test2.jpg',
      },
    ];

    render(<TourCardsList data={data} />);

    expect(screen.getAllByRole('heading')).toHaveLength(2);
  });
});
