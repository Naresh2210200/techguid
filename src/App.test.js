import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site sections', () => {
  render(<App />);
  expect(screen.getByText(/Our Mission/i)).toBeInTheDocument();
  expect(screen.getByText(/Our Products & Services/i)).toBeInTheDocument();
});
