import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function ExperiencesSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section 
      ref={sectionRef}
      className="art-menu-section" 
      style={{ position: 'relative', backgroundColor: 'var(--cream)', paddingTop: 'var(--space-2xl)', paddingBottom: '0' }}
    >
      <div className="art-menu-container" style={{ paddingBottom: 'var(--space-2xl)' }}>
        
        {/* Top Row: Header + Image */}
        <div className="art-menu-top-row">
          {/* Header Section */}
          <div className="art-menu-header fade-in-up" style={{ maxWidth: '600px', marginBottom: 0 }}>
            <div style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terracotta)', fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>
              Experiences
            </div>
            <h2 className="art-menu-title" style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)' }}>
              <span className="art-line">Moments</span>
              <span className="art-line highlight art-italic">Designed</span>
              <span className="art-line">to <em className="art-italic">Gather.</em></span>
            </h2>
            <div className="art-menu-squiggle">
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6C5 1 9 1 13 6C17 11 21 11 25 6C29 1 33 1 37 6" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="art-dish-desc" style={{ marginTop: 'var(--space-md)', maxWidth: '300px', fontSize: '0.9rem' }}>
              Intimate spaces. Thoughtful details. Seasonal menus. Every element curated for connection that lingers long after the last bite.
            </p>
          </div>
          
          {/* Top right floating background image */}
          <div className="hero-shape-experiences fade-in">
            <img src="/images/private-dining.png" alt="Saffron Muse Interior" />
          </div>
        </div>

        {/* 4 Pillars Menu Display */}
        <div className="art-menu-grid stagger-children" style={{ marginTop: 'var(--space-4xl)' }}>
          
          {/* Pillar 1 */}
          <div className="art-dish-card">
            <div className="art-dish-image-wrapper shape-arch-1">
              <img src="/images/private-dining.png" alt="Private Dining" style={{ borderRadius: '110px 110px 8px 8px' }} />
            </div>
            <div className="art-dish-icon" style={{ backgroundColor: '#4A2B4D' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
            </div>
            <h3 className="art-dish-title" style={{ fontSize: '1rem' }}>PRIVATE DINING</h3>
            <div className="art-dish-divider">
              <svg width="24" height="6" viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3C3 1 5 1 7 3C9 5 11 5 13 3C15 1 17 1 19 3C21 5 23 5 25 3" stroke="var(--terracotta)" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="art-dish-desc" style={{ textAlign: 'center', margin: '0 auto' }}>Secluded spaces for meaningful conversations and unforgettable evenings.</p>
          </div>

          {/* Pillar 2 */}
          <div className="art-dish-card" style={{ marginTop: '30px' }}>
            <div className="art-dish-image-wrapper shape-oval">
              <img src="/images/chefs-tasting.png" alt="Chef's Table" style={{ borderRadius: '110px' }} />
            </div>
            <div className="art-dish-icon icon-terracotta">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/></svg>
            </div>
            <h3 className="art-dish-title" style={{ fontSize: '1rem' }}>CHEF'S TABLE</h3>
            <div className="art-dish-divider">
              <svg width="24" height="6" viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3C3 1 5 1 7 3C9 5 11 5 13 3C15 1 17 1 19 3C21 5 23 5 25 3" stroke="var(--terracotta)" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="art-dish-desc" style={{ textAlign: 'center', margin: '0 auto' }}>A front-row seat to creativity. Curated courses, crafted live for you.</p>
          </div>

          {/* Pillar 3 */}
          <div className="art-dish-card" style={{ marginTop: '10px' }}>
            <div className="art-dish-image-wrapper shape-arch-1">
              <img src="/images/restaurant-story.png" alt="Celebrations" style={{ borderRadius: '110px 110px 8px 8px' }} />
            </div>
            <div className="art-dish-icon icon-olive">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 className="art-dish-title" style={{ fontSize: '1rem' }}>CELEBRATIONS</h3>
            <div className="art-dish-divider">
              <svg width="24" height="6" viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3C3 1 5 1 7 3C9 5 11 5 13 3C15 1 17 1 19 3C21 5 23 5 25 3" stroke="var(--terracotta)" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="art-dish-desc" style={{ textAlign: 'center', margin: '0 auto' }}>Life's finest milestones deserve a setting as extraordinary as the moment.</p>
          </div>

          {/* Pillar 4 */}
          <div className="art-dish-card" style={{ marginTop: '40px' }}>
            <div className="art-dish-image-wrapper shape-4">
              <img src="/images/hero-dish.png" alt="Wine Pairing" />
            </div>
            <div className="art-dish-icon icon-gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8"/><path d="M12 15v6"/><path d="M7 3h10l-1.5 5.5c-1 3.5-3.5 6.5-3.5 6.5s-2.5-3-3.5-6.5L7 3z"/></svg>
            </div>
            <h3 className="art-dish-title" style={{ fontSize: '1rem' }}>WINE PAIRING</h3>
            <div className="art-dish-divider">
              <svg width="24" height="6" viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3C3 1 5 1 7 3C9 5 11 5 13 3C15 1 17 1 19 3C21 5 23 5 25 3" stroke="var(--terracotta)" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="art-dish-desc" style={{ textAlign: 'center', margin: '0 auto' }}>Thoughtfully paired selections that elevate every flavor and story.</p>
          </div>
        </div>

        {/* Inquiry Form Banner */}
        <div className="experiences-inquiry-banner grid-cols-1-2 fade-in-up" style={{
          display: 'grid',
          gap: 'var(--space-4xl)',
          position: 'relative',
          zIndex: 5,
          marginTop: 'var(--space-5xl)',
          paddingBottom: 'var(--space-4xl)',
          maxWidth: 'var(--max-width)',
          margin: 'var(--space-5xl) auto 0 auto'
        }}>
          <div className="inquiry-left text-center-mobile" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--deep-brown)', lineHeight: 1.1, marginBottom: 'var(--space-md)' }}>
              Let's Create<br/>
              <span style={{ fontStyle: 'italic', display: 'block' }}>Something</span>
              <span style={{ fontStyle: 'italic', display: 'block' }}>Beautiful.</span>
            </h3>
            <div className="art-menu-squiggle" style={{ marginBottom: 'var(--space-lg)' }}>
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6C5 1 9 1 13 6C17 11 21 11 25 6C29 1 33 1 37 6" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '300px' }}>
              Planning a private event or special occasion? Our team will craft an experience tailored just for you.
            </p>
          </div>
          
          <div className="inquiry-right" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', justifyContent: 'center' }}>
            <div className="grid-cols-2" style={{ gap: 'var(--space-md)' }}>
              <input type="text" placeholder="YOUR NAME" className="exp-input" style={{ backgroundColor: 'transparent', border: '1px solid rgba(43, 13, 30, 0.15)' }} />
              <input type="email" placeholder="EMAIL ADDRESS" className="exp-input" style={{ backgroundColor: 'transparent', border: '1px solid rgba(43, 13, 30, 0.15)' }} />
              <input type="text" placeholder="DATE OF EVENT" className="exp-input" style={{ backgroundColor: 'transparent', border: '1px solid rgba(43, 13, 30, 0.15)' }} />
              <input type="text" placeholder="NUMBER OF GUESTS" className="exp-input" style={{ backgroundColor: 'transparent', border: '1px solid rgba(43, 13, 30, 0.15)' }} />
            </div>
            <div className="grid-cols-1-auto" style={{ gap: 'var(--space-md)', alignItems: 'stretch' }}>
              <textarea placeholder="TELL US ABOUT YOUR EVENT" className="exp-input" style={{ backgroundColor: 'transparent', border: '1px solid rgba(43, 13, 30, 0.15)', minHeight: '100px', resize: 'none' }}></textarea>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                <button className="btn btn-primary" style={{ padding: '1.25rem 2.5rem', letterSpacing: '0.1em', borderRadius: '40px', backgroundColor: '#3D2522', whiteSpace: 'nowrap' }}>INQUIRE NOW</button>
                <p style={{ fontSize: '0.7rem', color: 'var(--gray-500)', textAlign: 'center', lineHeight: 1.4 }}>We'll be in touch<br/>to curate the details.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
        {/* Philosophy Footer Block */}
        <div className="experiences-footer fade-in-up" style={{
          position: 'relative',
          paddingBottom: 'var(--space-5xl)',
          color: 'var(--deep-brown)'
        }}>
          <div className="grid-cols-1-2" style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 var(--container-padding)', gap: 'var(--space-5xl)', alignItems: 'center' }}>
            <div className="text-center-mobile" style={{ maxWidth: '400px' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 'normal', lineHeight: 1.1, marginBottom: 'var(--space-lg)' }}>
                Timeless flavors.<br/>
                Meaningful moments.<br/>
                Made for each other.
              </h2>
              <div className="art-menu-squiggle">
                <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6C5 1 9 1 13 6C17 11 21 11 25 6C29 1 33 1 37 6" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <div className="grid-cols-3" style={{ gap: 'var(--space-lg)' }}>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'clamp(260px, 40vw, 320px)', marginBottom: '15px', borderRadius: '12px', overflow: 'hidden' }}>
                  <img src="/images/seared-scallops.jpg" alt="Locally Sourced" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold', color: 'var(--deep-brown)', opacity: 0.8 }}>LOCALLY SOURCED<br/>INGREDIENTS</p>
              </div>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'clamp(260px, 40vw, 320px)', marginBottom: '15px', borderRadius: '12px', overflow: 'hidden' }}>
                  <img src="/images/lamb-ragout.jpg" alt="Sustainable" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold', color: 'var(--deep-brown)', opacity: 0.8 }}>SUSTAINABLE<br/>& CONSCIOUS</p>
              </div>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'clamp(260px, 40vw, 320px)', marginBottom: '15px', borderRadius: '12px', overflow: 'hidden' }}>
                  <img src="/images/rose-fig.jpg" alt="Made With Passion" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold', color: 'var(--deep-brown)', opacity: 0.8 }}>MADE WITH<br/>PASSION</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
