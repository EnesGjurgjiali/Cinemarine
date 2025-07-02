import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  IoGlobeOutline,
  IoReorderTwo,
  IoCloseOutline,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io5";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);
  const overlayRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY >= 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuOpen = () => setMenuActive(true);
  const handleMenuClose = () => setMenuActive(false);
  const handleOverlayClick = () => setMenuActive(false);

  return (
    <header
      className={`header${headerActive ? " active" : ""}`}
      data-header
      ref={headerRef}
    >
      <div className="container">
        <div
          className={`overlay${menuActive ? " active" : ""}`}
          data-overlay
          ref={overlayRef}
          onClick={handleOverlayClick}
        ></div>
        <Link href="/" className="logo">
          <img src="/assets/img/logos/logo-1.png" alt="Cinemarine Logo" />
        </Link>
        <div className="header-actions">
          <div className="lang-wrapper">
            <label htmlFor="language">
              <IoGlobeOutline />
            </label>
            <select name="language" id="language">
              <option value="en">EN</option>
              <option value="alb">ALB</option>
              <option value="tr">TUR</option>
            </select>
          </div>
        </div>
        <button
          className="menu-open-btn"
          data-menu-open-btn
          onClick={handleMenuOpen}
        >
          <IoReorderTwo />
        </button>
        <nav className={`navbar${menuActive ? " active" : ""}`} data-navbar>
          <div className="navbar-top">
            <Link href="/" className="logo">
              <img src="/assets/img/logos/logo-1.png" alt="Cinemarine Logo" />
            </Link>
            <button
              className="menu-close-btn"
              data-menu-close-btn
              onClick={handleMenuClose}
            >
              <IoCloseOutline />
            </button>
          </div>
          <ul className="navbar-list">
            <li>
              <Link href="/movies" className="navbar-link">
                Movies
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="navbar-link">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/about" className="navbar-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/campaigns" className="navbar-link">
                Campaigns
              </Link>
            </li>
          </ul>
          <ul className="navbar-social-list">
            <li>
              <a href="#" className="navbar-social-link">
                <IoLogoFacebook />
              </a>
            </li>
            <li>
              <a href="#" className="navbar-social-link">
                <IoLogoInstagram />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
