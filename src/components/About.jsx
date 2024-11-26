const About = () => {
  return (
    <section className="about-section block-padding">
      <div className="container flex-between">
        <div className="about-left flow">
          <h2>About Little Lemon</h2>
          <p>
            The Mediterranean Diet emphasizes plant-based foods and healthy
            fats. Eating mostly veggies, fruits and whole grains. Extra virgin
            olive oil is the main source of fat. The Mediterranean Diet can
            lower your risk of cardiovascular disease and many other chronic
            conditions. Our motto is to deliver our vision of the recipes with a
            modern twist to all guests!
          </p>
        </div>
        <div className="about-right">
          <img src="/images/restaurant-outside.jpg" alt="" />
          <img src="/images/Mario-and-Adrian-A.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
