import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="navbar-logo" style={{ color: 'var(--cream)', filter: 'brightness(0) invert(1)' }}>
            <div className="navbar-logo-icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4C24 4 18 16 12 24C18 32 24 44 24 44C24 44 30 32 36 24C30 16 24 4 24 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="navbar-logo-text" style={{ color: 'var(--cream)' }}>
              <span>Savora</span>
              One
            </div>
          </Link>
          <p className="footer-brand-text">
            A culinary canvas where timeless traditions meet modern artistry. Every plate is a muse. Every moment, a masterpiece.
          </p>
        </div>

        <div className="footer-nav">
          <h4 className="footer-heading">Explore</h4>
          <div className="footer-links">
            <Link to="/menu">Menu</Link>
            <Link to="/experiences">Chef's Tasting</Link>
            <Link to="/private-dining">Private Dining</Link>
            <Link to="/story">Our Story</Link>
            <Link to="/reservations">Reservations</Link>
          </div>
        </div>

        <div className="footer-contact">
          <h4 className="footer-heading">Contact</h4>
          <div className="footer-links">
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <MapPin size={16} style={{ marginTop: '4px', flexShrink: 0 }} />
              <span>Dhapakhel-24,<br />Kathmandu</span>
            </a>
            <a href="tel:+12125550199" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Phone size={16} />
              <span>=977 98xxxxxxxx</span>
            </a>
            <a href="mailto:reservations@savoraone.com" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Mail size={16} />
              <span>reservations@savoraone.com</span>
            </a>
          </div>
        </div>

        <div className="footer-hours">
          <h4 className="footer-heading">Hours</h4>
          <div className="footer-hours-list">
            <div className="footer-hours-row">
              <span>Mon - Wed</span>
              <span>5:00 PM - 10:00 PM</span>
            </div>
            <div className="footer-hours-row">
              <span>Thu - Sat</span>
              <span>5:00 PM - 11:30 PM</span>
            </div>
            <div className="footer-hours-row">
              <span>Sunday</span>
              <span>4:00 PM - 9:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Savora One. All rights reserved.
        </p>
        <div className="footer-socials">
        </div>
      </div>
    </footer>
  );
}
