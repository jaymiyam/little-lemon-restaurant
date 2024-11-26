/* eslint-disable react/prop-types */
import { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('1700');
  const [guest, setGuest] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReservation = {
      date,
      time,
      guest,
      occasion,
    };
    submitForm(newReservation);
  };

  const handleDateChange = (date) => {
    setDate(date);
    dispatch(date);
  };

  return (
    <section className="form-section">
      <div className="container">
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="res-date">Choose Date: </label>
            <input
              type="date"
              name="res-date"
              id="res-date"
              value={date}
              onChange={(e) => handleDateChange(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="res-time">Choose Time: </label>
            <select
              name="res-time"
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="res-occasion">Occasion: </label>
            <select
              name="res-occasion"
              id="res-occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
          <input
            className="button"
            type="submit"
            value="Make your reservation"
          />
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
