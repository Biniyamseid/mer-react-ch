import { render, screen } from '@testing-library/react';
import App from './App';
test('renders Star Wars Actors header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Star Wars Actors/i);
  expect(headerElement).toBeInTheDocument();
});