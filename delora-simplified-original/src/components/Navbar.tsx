"use client";

import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbarContainer">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Delora Logo" className="logo-img" />
        </a>

        {/* Single nav item */}
        <ul className="navLinks">
          <li>
            <a href="/shop" className="navLink">Магазин</a>
          </li>
        </ul>

        {/* Cart icon (inert placeholder — no backend cart) */}
        <div className="actions">
          <a href="#" className="cartButton" aria-label="Количка">
            <ShoppingBag size={24} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
