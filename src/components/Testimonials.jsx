const Testimonials = () => {
  return (
    <section className="testimonials-section block-padding">
      <div className="container flow">
        <h2>Testimonials</h2>
        <div className="flex-between">
          <div className="testimonial-card">
            <div className="flex-between">
              <div className="flex-column">
                <span className="testimonial-name">John Smith</span>
                <span className="testimonial-rating">4.5 star rating</span>
              </div>
              <div className="profile-circle"></div>
            </div>
            <p>
              Extremely happy with the service in Little Lemon! Went with my
              family for 10th anniversary. The food was amazing, vibe was
              perfect. Will definitely come back some other time!
            </p>
          </div>
          <div className="testimonial-card">
            <div className="flex-between">
              <div className="flex-column">
                <span className="testimonial-name">Christian Smith</span>
                <span className="testimonial-rating">4.9 star rating</span>
              </div>
              <div className="profile-circle"></div>
            </div>
            <p>
              Extremely happy with the service in Little Lemon! Went with my
              family for 10th anniversary. The food was amazing, vibe was
              perfect. Will definitely come back some other time!
            </p>
          </div>
          <div className="testimonial-card">
            <div className="flex-between">
              <div className="flex-column">
                <span className="testimonial-name">Mary Doe</span>
                <span className="testimonial-rating">4.3 star rating</span>
              </div>
              <div className="profile-circle"></div>
            </div>
            <p>
              Extremely happy with the service in Little Lemon! Went with my
              family for 10th anniversary. The food was amazing, vibe was
              perfect. Will definitely come back some other time!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
