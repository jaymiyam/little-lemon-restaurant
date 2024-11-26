import Nav from './Nav';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className>
      <div className="container flex-between">
        <Link to="/">
          <img src="src/assets/logo-little-lemon.svg" className="logo-img" />
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
