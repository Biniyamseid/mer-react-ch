import { render, screen, waitFor } from '@testing-library/react';
import ActorsList from '../components/ActorsList';

test('displays actors after loading', async () => {
  render(<ActorsList />);
  expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  await screen.findByText(/Height:/);
});
