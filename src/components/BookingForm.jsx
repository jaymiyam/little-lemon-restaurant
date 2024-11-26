/* eslint-disable react/prop-types */
import { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const currentDate = new Date();

  const [date, setDate] = useState('');
  const [time, setTime] = useState('1700');
  const [guest, setGuest] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReservation = {
      date,
      time,
      guest,
      occasion,
    };

    if (new Date(date) < currentDate) {
      setError('Date cannot be in the past!');
      return;
    }

    submitForm(newReservation);
  };

  const validateDate = (date) => {
    if (new Date(date) < currentDate) {
      setError('Date cannot be in the past!');
    } else {
      setError('');
    }
  };

  const handleDateChange = (date) => {
    setDate(date);
    dispatch(date);
  };

  return (
    <section className="form-section">
      <div className="container">
        <form className="reservation-form" onSubmit={handleSubmit}>
          <p className="error-message">{error}</p>
          <div className="form-group">
            <label htmlFor="res-date">Choose Date: </label>
            <input
              type="date"
              name="res-date"
              id="res-date"
              value={date}
              onChange={(e) => handleDateChange(e.target.value)}
              onBlur={(e) => validateDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="res-time">Choose Time: </label>
            <select
              name="res-time"
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              {availableTimes.map((time, index) => {
                return (
                  <option key={index} value={time}>
                    {time}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="res-guest">Number of guests: </label>
            <input
              type="number"
              name="res-guest"
              id="res-guest"
              min="1"
              max="10"
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="res-occasion">Occasion: </label>
            <select
              name="res-occasion"
              id="res-occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversary">Anniversary</option>
              <option value="other">Other</option>
            </select>
          </div>
          <input
            className="button"
            type="submit"
            value="Make your reservation"
            aria-label="On Click"
          />
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
