import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import BookingHero from './components/BookingHero';
import BookingForm from './components/BookingForm';

test('renders booking heading correctly', () => {
  render(<BookingHero />);
  const headingElement = screen.getByText('Book A Table');
  expect(headingElement).toBeDefined();
});

test('initializeTimes returns the correct expected value', () => {
  render(<BookingForm />);
  const today = new Date();
  const initialState = initializeTimes();
  const expectedResult = { times: fetchAPI(today) };
  expect(initialState).toEqual(expectedResult);
});
