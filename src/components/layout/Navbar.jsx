import { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const getDashboardLink = () => {
    if (!user) return '/login';
    if (user.role === 'ADMIN') return '/admin/dashboard';
    if (user.role === 'RESTAURANT_OWNER') return '/owner/dashboard';
    return '/customer/dashboard';
  };

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
    navigate('/');
  };

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
          <Link to="/#menu" className="navbar-link" onClick={closeMenu}>Menu</Link>
          <Link to="/#experiences" className="navbar-link" onClick={closeMenu}>Experiences</Link>
          <Link to="/#reservations" className="navbar-link" onClick={closeMenu}>Reservations</Link>
          <Link to="/#story" className="navbar-link" onClick={closeMenu}>Story</Link>
          
          <button className="navbar-cart-btn" onClick={() => { closeMenu(); navigate('/checkout'); }} aria-label="Open Cart">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Link to={getDashboardLink()} className="navbar-link" onClick={closeMenu}>
                {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
              </Link>
              <button className="navbar-contact" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <Link to="/login" className="navbar-contact" onClick={closeMenu}>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
