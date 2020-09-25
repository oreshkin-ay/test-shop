import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/" className="Header-Link">
        Главная
      </Link>

      <Link to="/cart" className="Header-Link">
        Корзина
      </Link>
    </header>
  );
};

export default Header;
