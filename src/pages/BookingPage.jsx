import BookingHero from '../components/BookingHero';
import BookingForm from '../components/BookingForm';
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

// adding fake API provided from Coursera

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};
const submitAPI = function (formData) {
  console.log(formData);
  return true;
};

// end of fake API

const BookingPage = () => {
  const initialState = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
    return fetchAPI(new Date(date));
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate('/confirmed');
    }
  }

  return (
    <main>
      <BookingHero />
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
};

export default BookingPage;
