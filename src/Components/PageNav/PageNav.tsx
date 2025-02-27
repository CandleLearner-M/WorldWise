import { Link, NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "../Logo";
import { useState } from "react";

export default function PageNav() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = function () {
    setMenuOpen((prevStatus) => !prevStatus);
  };

  const hideMenu = function () {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <Logo />
      </Link>

      <div
        className={`${styles.menubutton} ${menuOpen ? "" : styles.active}`}
        onClick={() => toggleMenu()}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "" : styles.active}>
        <li>
          <NavLink to="/pricing" onClick={() => hideMenu()}>
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" onClick={() => hideMenu()}>
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="cta" onClick={() => hideMenu()}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
