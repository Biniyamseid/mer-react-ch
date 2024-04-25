import { render, screen } from '@testing-library/react';
import ActorsList from './ActorsList';

test('renders loading state initially', () => {
  render(<ActorsList />);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
