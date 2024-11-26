const SpecialMenu = () => {
  return (
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
                tomatoes, green bell pepper, red onion, olives, and feta cheese.
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
                make from scratch! Every bite of this supremely moist pound cake
                is bursting with fresh lemon flavor.
              </p>
            </div>
            <button className="button">Order Online</button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;
