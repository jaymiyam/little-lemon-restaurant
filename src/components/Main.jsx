const Main = () => {
  return (
    <main>
      {/* hero section */}
      <section className="hero-section">
        <div className="container flex-between">
          <div className="hero-left flow">
            <div>
              <h1>Little Lemon</h1>
              <span>Chicago</span>
            </div>
            <p>
              Welcome to Little Lemon! We are Adrian and Mario, we cook
              traditional Mediterranean recipes and serve them with a modern
              twist.{' '}
            </p>
            <a href="" className="button">
              Reserva a table
            </a>
          </div>
          <div className="hero-right">
            <img src="/images/restauranfood.jpg" />
          </div>
        </div>
      </section>
      {/* menu section */}
      <section className="menu-section block-padding">
        <div className="container flow">
          <div className="flex-between">
            <h2>This Week&apos;s Specials!</h2>
            <a href="" className="button">
              Online Menu
            </a>
          </div>
          <div className="flex-between">
            <article className="menu-card">
              <div>
                <div className="menu-image">
                  <img src="/images/greek-salad.jpg" />
                </div>
                <div className="flex-between">
                  <h3 className="menu-name">Greek Salad</h3>
                  <span className="menu-price">$12.99</span>
                </div>
                <p>
                  A traditional Greek salad consists of sliced cucumbers,
                  tomatoes, green bell pepper, red onion, olives, and feta
                  cheese.
                </p>
              </div>
              <button className="button">Order Online</button>
            </article>
            <article className="menu-card">
              <div>
                <div className="menu-image">
                  <img src="/images/bruschetta.jpg" />
                </div>
                <div className="flex-between">
                  <h3 className="menu-name">Bruschetta</h3>
                  <span className="menu-price">$6.99</span>
                </div>
                <p>
                  Bruschetta is a classic Italian appetizer that is easy to make
                  at home. Toasted bread is topped with a mixture of juicy
                  tomatoes, garlic, Parmesan cheese, fresh basil, and balsamic.
                </p>
              </div>
              <button className="button">Order Online</button>
            </article>
            <article className="menu-card">
              <div>
                <div className="menu-image">
                  <img src="/images/lemon-dessert.jpg" />
                </div>
                <div className="flex-between">
                  <h3 className="menu-name">Lemon Cake</h3>
                  <span className="menu-price">$5.99</span>
                </div>
                <p>
                  This moist Lemon Cake Recipe is fluffy, tangy and so easy to
                  make from scratch! Every bite of this supremely moist pound
                  cake is bursting with fresh lemon flavor.
                </p>
              </div>
              <button className="button">Order Online</button>
            </article>
          </div>
        </div>
      </section>
      {/* testimonial section */}
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
      {/* about section */}
      <section className="about-section block-padding">
        <div className="container flex-between">
          <div className="about-left flow">
            <h2>About Little Lemon</h2>
            <p>
              The Mediterranean Diet emphasizes plant-based foods and healthy
              fats. Eating mostly veggies, fruits and whole grains. Extra virgin
              olive oil is the main source of fat. The Mediterranean Diet can
              lower your risk of cardiovascular disease and many other chronic
              conditions. Our motto is to deliver our vision of the recipes with
              a modern twist to all guests!
            </p>
          </div>
          <div className="about-right">
            <img src="/images/restaurant-outside.jpg" alt="" />
            <img src="/images/Mario-and-Adrian-A.jpg" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
