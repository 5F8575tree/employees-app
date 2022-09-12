import { render } from '@testing-library/react';
import Hero from '../components/Hero';

test('renders hero link', () => {
  render(<Hero />);
});

test('renders hero link snapshot', () => {
  const { asFragment } = render(<Hero />);
  expect(asFragment()).toMatchSnapshot();
});
