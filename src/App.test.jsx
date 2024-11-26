import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import BookingHero from './components/BookingHero';

test('renders booking heading correctly', () => {
  render(<BookingHero />);
  const headingElement = screen.getByText('Book A Table');
  expect(headingElement).toBeDefined();
});
