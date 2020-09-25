import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/" class="Header-Link">
        Главная
      </Link>

      <Link to="/cart" class="Header-Link">
        Корзина
      </Link>
    </header>
  );
};

export default Header;
