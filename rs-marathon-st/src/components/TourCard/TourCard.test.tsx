import { render } from '@testing-library/react';
import TourCard, { Props } from './index';

describe('TourCard', () => {
  test('renders tour card', () => {
    const props: Props = {
      title: 'Test Tour',
      date: '2023-04-02',
      type: 'Test Type',
      radioInput: 'Yes',
      scas: true,
      imgPath: {},
    };

    const { getByText } = render(<TourCard {...props} />);

    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(`Available from: ${props.date}`)).toBeInTheDocument();
    expect(getByText(`Tour type: ${props.type}`)).toBeInTheDocument();
    expect(getByText(`Kids are allowed: ${props.radioInput}`)).toBeInTheDocument();
    expect(getByText(props.scas ? 'SCAS approved' : 'Not approved by SCAS')).toBeInTheDocument();
  });
});
