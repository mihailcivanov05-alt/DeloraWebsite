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

  const navLinks = [
    { label: language === "en" ? "Shop" : "Магазин", href: "/shop" },
    { label: t.navbar.consultation, href: "/#consultation" },
    { label: language === "en" ? "Reviews" : "Отзиви", href: "/#reviews" },
    { label: t.navbar.faq, href: "/#faq" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${isMobileMenuOpen ? "menu-open" : ""}`}>
      <div className="container navbarContainer">
        <Link href="/" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
          <img src="/logo.png" alt="Delora Logo" className="logo-img" />
        </Link>

        {/* Desktop Links */}
        <ul className="navLinks desktopOnly">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="navLink">{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="actions">
          <div className="lang-switcher desktopOnly">
            <button 
              className={language === "en" ? "active" : ""} 
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <span className="divider">|</span>
            <button 
              className={language === "bg" ? "active" : ""} 
              onClick={() => setLanguage("bg")}
            >
              BG
            </button>
          </div>
          
          <button 
            className="cartButton" 
            onClick={() => setIsCartOpen(true)}
            aria-label={`Open cart. ${cartCount} items.`}
          >
            <ShoppingBag size={24} strokeWidth={1.5} aria-hidden="true" />
            {cartCount > 0 && <span className="cartCount">{cartCount}</span>}
          </button>

          <div className="desktopOnly">
            <Button variant="primary" size="sm" href="/#product-hero">
              {t.navbar.shop}
            </Button>
          </div>

          <button className="mobileMenuToggle" onClick={toggleMobileMenu} aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}>
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
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
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={toggleMobileMenu}>
                  {link.label}
                </Link>
              ))}

              <div className="mobileLangSwitcher">
                <button 
                  className={language === "en" ? "active" : ""} 
                  onClick={() => { setLanguage("en"); toggleMobileMenu(); }}
                >
                  EN
                </button>
                <button 
                  className={language === "bg" ? "active" : ""} 
                  onClick={() => { setLanguage("bg"); toggleMobileMenu(); }}
                >
                  BG
                </button>
              </div>

              <div className="mobileMenuCta">
                <Button variant="primary" size="lg" style={{ width: '100%' }} href="/#product-hero" onClick={toggleMobileMenu}>
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
