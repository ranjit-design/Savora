import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function ArtMenuSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section 
      id="menu"
      ref={sectionRef}
      className="art-menu-section" 
      style={{ position: 'relative', backgroundColor: 'var(--cream)', paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-section)' }}
    >
      <div className="art-menu-container">
        
        {/* Top Row: Header + Image */}
        <div className="art-menu-top-row">
          {/* Header Section */}
          <div className="art-menu-header fade-in-up">
            <div style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terracotta)', fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>
              Menu
            </div>
            <h2 className="art-menu-title">
              <span className="art-line">A Menu</span>
              <span className="art-line highlight art-italic">Composed</span>
              <span className="art-line">Like <em className="art-italic">Art.</em></span>
            </h2>
            <div className="art-menu-squiggle">
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6C5 1 9 1 13 6C17 11 21 11 25 6C29 1 33 1 37 6" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="art-dish-desc" style={{ marginTop: 'var(--space-md)', maxWidth: '400px', fontSize: '0.9rem' }}>
              Crafted with the finest ingredients, inspired by culinary artistry, and served to create unforgettable dining moments.
            </p>
          </div>
          
          <div className="hero-shape-menu fade-in">
            <img src="/images/hero-restaurant.webp" alt="Restaurant Interior" />
          </div>
        </div>

        {/* 4 Pillars Menu Display */}
        <div className="art-menu-grid stagger-children">
          
          {/* Dish 1 */}
          <div className="art-dish-card">
            <div className="art-dish-image-wrapper shape-1">
              <img src="/images/saffron-burreta.webp" alt="Saffron Burreta" />
            </div>
            <div className="art-dish-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
            </div>
            <h3 className="art-dish-title">SAFFRON<br/>BURRETA</h3>
            <div className="art-dish-divider">
              <svg width="24" height="6" viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3C3 1 5 1 7 3C9 5 11 5 13 3C15 1 17 1 19 3C21 5 23 5 25 3" stroke="var(--terracotta)" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="art-dish-desc">Creamy burrata, saffron honey, pistachio crumble, and micro herbs.</p>
          </div>

          {/* Dish 2 */}
          <div className="art-dish-card" style={{ marginTop: '40px' }}>
            <div className="art-dish-image-wrapper shape-2">
              <img src="/images/seared-scallops.webp" alt="Seared Scallops" />
            </div>
            <div className="art-dish-icon icon-terracotta">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
            </div>
            <h3 className="art-dish-title">SEARED<br/>SCALLOPS</h3>
            <div className="art-dish-divider">
              <svg width="24" height="6" viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3C3 1 5 1 7 3C9 5 11 5 13 3C15 1 17 1 19 3C21 5 23 5 25 3" stroke="var(--terracotta)" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="art-dish-desc">Saffron carrot purée, yuzu beurre blanc, and crispy lotus root.</p>
          </div>

          {/* Dish 3 */}
          <div className="art-dish-card" style={{ marginTop: '20px' }}>
            <div className="art-dish-image-wrapper shape-3">
              <img src="/images/lamb-ragout.webp" alt="Lamb Ragout" />
            </div>
            <div className="art-dish-icon icon-purple">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </div>
            <h3 className="art-dish-title">LAMB<br/>RAGOUT</h3>
            <div className="art-dish-divider">
              <svg width="24" height="6" viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3C3 1 5 1 7 3C9 5 11 5 13 3C15 1 17 1 19 3C21 5 23 5 25 3" stroke="var(--terracotta)" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="art-dish-desc">Slow-braised lamb, black garlic, saffron jus, and herb oil.</p>
          </div>

          {/* Dish 4 */}
          <div className="art-dish-card" style={{ marginTop: '60px' }}>
            <div className="art-dish-image-wrapper shape-4">
              <img src="/images/rose-fig.webp" alt="Rose & Fig Delice" />
            </div>
            <div className="art-dish-icon icon-gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <h3 className="art-dish-title">ROSE & FIG<br/>DELICE</h3>
            <div className="art-dish-divider">
              <svg width="24" height="6" viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3C3 1 5 1 7 3C9 5 11 5 13 3C15 1 17 1 19 3C21 5 23 5 25 3" stroke="var(--terracotta)" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="art-dish-desc">Rose panna cotta, fig compote, pistachio crunch, and saffron tuile.</p>
          </div>
        </div>

      </div> {/* Close art-menu-container */}

      {/* Bottom Banner Full Width */}
      <div style={{
        backgroundImage: 'url(/images/hero-restaurant.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        width: '100%',
        minHeight: '80vh',
        padding: 'var(--space-5xl) 0',
        marginTop: 'var(--space-4xl)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        {/* Light Glass Overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 248, 240, 0.85)', zIndex: 1 }}></div>

        <div className="art-menu-container fade-in-up grid-cols-2" style={{ 
          position: 'relative', 
          zIndex: 2, 
          gap: 'var(--space-4xl)',
          alignItems: 'flex-start',
          minHeight: '65vh'
        }}>
          
          {/* Left Column */}
          <div className="art-banner-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <h2 className="art-footer-slogan" style={{ color: 'var(--deep-brown)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: 1.1, fontFamily: 'var(--font-serif)' }}>
              Four <span style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>Expressions.</span><br/>
              One <span style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>Unforgettable</span> Journey.
            </h2>
            <div className="art-footer-squiggle" style={{ marginTop: 'var(--space-xl)' }}>
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6C5 1 9 1 13 6C17 11 21 11 25 6C29 1 33 1 37 6" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            
            <p style={{ marginTop: 'var(--space-2xl)', color: 'var(--gray-600)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '400px' }}>
              Discover a culinary experience like no other — where every dish tells a story, every moment stays with you.
            </p>
          </div>
          
          {/* Right Column Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
            
            <img src="/images/rose-fig.webp" alt="Chef's Tasting Menu" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }} />
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                <div className="art-footer-icon" style={{ color: 'var(--terracotta)', border: '2px solid var(--terracotta)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
                </div>
                <h4 className="art-box-title" style={{ color: 'var(--deep-brown)', fontSize: '1.75rem', margin: 0, fontFamily: 'var(--font-serif)' }}>CHEF'S TASTING MENU</h4>
              </div>
              
              <p className="art-box-desc" style={{ color: 'var(--gray-600)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 'var(--space-xl)' }}>A curated experience in four courses, crafted with the finest seasonal ingredients and artistic intention.</p>
              
              <div className="tasting-action-row" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2xl)', flexWrap: 'wrap' }}>
                <div className="art-footer-price" style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className="price-val" style={{ color: 'var(--deep-brown)', fontSize: '2.5rem', fontWeight: 'bold', lineHeight: 1, fontFamily: 'var(--font-serif)' }}>Rs.1500</span>
                  <span className="price-label" style={{ color: 'var(--terracotta)', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 'bold', marginTop: '8px' }}>PER PERSON</span>
                </div>
                
                <a href="#reservations" className="btn btn-primary art-reserve-btn" style={{ padding: '1rem 2.5rem', backgroundColor: '#3D2522' }}>
                  RESERVE A TABLE
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
