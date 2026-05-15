"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCartContext } from "@/context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import Button from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, setIsCartOpen } = useCartContext();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cartCount = cart?.lines?.edges?.reduce((acc: number, edge: any) => acc + edge.node.quantity, 0) || 0;

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${isMobileMenuOpen ? "menu-open" : ""}`}>
      <div className="container navbarContainer">
        <Link href="/" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
          DELORA
        </Link>

        {/* Desktop Links */}
        <ul className="navLinks desktopOnly">
          <li><Link href="/#how-it-works" className="navLink">{t.navbar.howItWorks}</Link></li>
          <li><Link href="/science" className="navLink">{t.navbar.science}</Link></li>
          <li><Link href="/faq" className="navLink">{t.navbar.faq}</Link></li>
          <li><Link href="/about" className="navLink">{t.navbar.about}</Link></li>
        </ul>

        <div className="actions">
          <div className="lang-switcher desktopOnly">
            <button 
              className={language === 'en' ? 'active' : ''} 
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <span className="divider">|</span>
            <button 
              className={language === 'bg' ? 'active' : ''} 
              onClick={() => setLanguage('bg')}
            >
              BG
            </button>
          </div>
          
          <button 
            className="cartButton" 
            onClick={() => setIsCartOpen(true)}
            aria-label="Open cart"
          >
            <ShoppingBag size={24} strokeWidth={1.5} />
            {cartCount > 0 && <span className="cartCount">{cartCount}</span>}
          </button>

          <div className="desktopOnly">
            <Button variant="primary" size="sm" href="/#consultation">
              {t.navbar.shop}
            </Button>
          </div>

          <button className="mobileMenuToggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobileMenu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobileMenuLinks">
              <Link href="/#how-it-works" onClick={toggleMobileMenu}>{t.navbar.howItWorks}</Link>
              <Link href="/science" onClick={toggleMobileMenu}>{t.navbar.science}</Link>
              <Link href="/faq" onClick={toggleMobileMenu}>{t.navbar.faq}</Link>
              <Link href="/about" onClick={toggleMobileMenu}>{t.navbar.about}</Link>
              
              <div className="mobileLangSwitcher">
                <button 
                  className={language === 'en' ? 'active' : ''} 
                  onClick={() => { setLanguage('en'); toggleMobileMenu(); }}
                >
                  English
                </button>
                <button 
                  className={language === 'bg' ? 'active' : ''} 
                  onClick={() => { setLanguage('bg'); toggleMobileMenu(); }}
                >
                  Български
                </button>
              </div>

              <div className="mobileMenuCta">
                <Button variant="primary" size="lg" style={{ width: '100%' }} href="/#consultation" onClick={toggleMobileMenu}>
                  {t.navbar.shop}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
