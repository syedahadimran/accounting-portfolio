import "./Header.css";
import logo from "../../assets/logo-mirana.png";

function Header() {
  return (
    <header className="header">
      <a href="#" className="header-logo">
        <img src={logo} alt="Mirana" />
      </a>

      <nav className="header-nav">
        <a href="#">Services</a>
        <a href="#">About us</a>
        <a href="#">Tax Planning</a>
        <a href="#">Advisory</a>
        <a href="#">Contact</a>
      </nav>

      <button className="header-btn">Schedule a Call</button>

      <button className="menu-btn">☰</button>
    </header>
  );
}

export default Header;