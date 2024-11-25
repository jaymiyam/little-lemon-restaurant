import Nav from './Nav';

const Header = () => {
  return (
    <header className>
      <div className="container flex-between">
        <img src="src/assets/logo-little-lemon.svg" className="logo-img" />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
