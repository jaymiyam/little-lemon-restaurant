const Footer = () => {
  return (
    <footer className="block-padding">
      <div className="container flex-between align-start">
        <div>
          <img src="src/assets/logo-little-lemon.svg" className="logo-img" />
        </div>
        <div>
          <h3>Links</h3>
          <ul role="list">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Reservation</a>
            </li>
            <li>
              <a href="">Order Online</a>
            </li>
            <li></li>
            <a href="">Login</a>
          </ul>
        </div>
        <div>
          <h3>Contact Us</h3>
          <div className="flex-column">
            <span>Address:</span>
            <span>No.101, Lemon Ave, Chicago</span>
          </div>
          <div className="flex-column">
            <span>Telephone:</span>
            <span>+123 4567 8900</span>
          </div>
          <div className="flex-column">
            <span>Email:</span>
            <span>hello@littlelemon.com</span>
          </div>
        </div>
        <div>
          <h3>Social Media</h3>
          <ul role="list">
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
