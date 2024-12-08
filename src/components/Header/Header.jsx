import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "menu__link");
  return (
    <header className="header">
      <div className="header__title">Помічник Ювеліра beta v.1.1.0</div>
      <nav className="header__menu menu">
        <ul className="menu__list">
          <li className="menu__item">
            <NavLink to="/" className={setActive}>
              проба
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/alloys" className={setActive}>
              сплави
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/solders" className={setActive}>
              припої
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/ring" className={setActive}>
              обручка
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
