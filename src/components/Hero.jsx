const Hero = () => {
  return (
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
  );
};

export default Hero;
