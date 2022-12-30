import { useState } from "react";
import logo from "./images/logo.svg";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div
        onClick={() => setIsActive((curr) => (curr = !curr))}
        className={`hamburger ${isActive ? "open" : ""}`}
      ></div>
      <nav className={`${isActive ? "show" : ""}`}>
        <ul>
          <li>
            <a href="/">Product</a>
          </li>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
