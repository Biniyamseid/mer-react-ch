import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActorsList from '../components/ActorsList';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      results: [
        { name: 'Luke Skywalker', height: '172', birth_year: '19BBY', uid: '1', url: 'https://swapi.tech/api/people/1' }
      ],
      next: null,
      previous: null,
    })
  })
);

beforeEach(() => {
  fetch.mockClear();
});

describe('ActorsList', () => {
it('handles fetch error', async () => {
    fetch.mockImplementationOnce(() => Promise.reject('API is down'));
    render(<ActorsList />);
    expect(await screen.findByText(/Error:/)).toBeInTheDocument();
});

});
