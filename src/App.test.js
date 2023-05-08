import {render, screen, waitFor} from '@testing-library/react';
import App from './App';

test('renders github link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Created by Kattis/i);
  expect(linkElement).toBeInTheDocument();
});
