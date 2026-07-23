import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="navbar-logo-icon">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4C24 4 18 16 12 24C18 32 24 44 24 44C24 44 30 32 36 24C30 16 24 4 24 4Z" stroke="var(--terracotta)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24 16C24 16 21 21 19 24C21 27 24 32 24 32C24 32 27 27 29 24C27 21 24 16 24 16Z" fill="var(--gold)"/>
            </svg>
          </div>
          <div className="navbar-logo-text">
            <span>Savora</span>
            One
          </div>
        </Link>

        <div className={`navbar-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`navbar-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" className={({isActive}) => `navbar-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/menu" className={({isActive}) => `navbar-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Menu</NavLink>
          <NavLink to="/experiences" className={({isActive}) => `navbar-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Experiences</NavLink>
          <Link to="/#reservations" className="navbar-link" onClick={closeMenu}>Reservations</Link>
          <NavLink to="/story" className={({isActive}) => `navbar-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Story</NavLink>
          <Link to="/contact" className="navbar-contact" onClick={closeMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
