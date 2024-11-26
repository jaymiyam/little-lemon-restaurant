import { Link } from 'react-router-dom';

const ConfirmedBookingPage = () => {
  return (
    <section className="block-padding">
      <div className="container flow">
        <h1>Booking Confirmed!</h1>
        <p>Thank you very much, we look forward to seeing you!</p>
        <Link to="/" className="button">
          Back to Homepage
        </Link>
      </div>
    </section>
  );
};

export default ConfirmedBookingPage;
