import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function ReservationSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section 
      id="reservations"
      ref={sectionRef}
      className="reservation-section" 
      style={{ 
        position: 'relative', 
        backgroundColor: 'var(--cream)', 
        padding: 'var(--space-5xl) var(--container-padding)',
        borderTop: '1px solid rgba(139, 94, 60, 0.1)',
        scrollMarginTop: 'var(--nav-height)'
      }}
    >
      <div className="grid-cols-2" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        gap: 'var(--space-4xl)',
        alignItems: 'center'
      }}>
        
        {/* Left Side: Form */}
        <div className="fade-in-up text-center-mobile" style={{ maxWidth: '480px' }}>
          <div style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terracotta)', fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>
            Reservations
          </div>
          <h2 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '3.5rem', 
            color: 'var(--deep-brown)',
            lineHeight: 1.1,
            marginBottom: 'var(--space-md)'
          }}>
            Reserve<br/>
            <span style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>Your Table</span>
          </h2>
          
          <div className="art-menu-squiggle" style={{ marginBottom: 'var(--space-xl)' }}>
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6C5 1 9 1 13 6C17 11 21 11 25 6C29 1 33 1 37 6" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <label style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '0.75rem', 
                fontWeight: 'bold', 
                letterSpacing: '0.1em', 
                color: 'var(--deep-brown)',
                textTransform: 'uppercase'
              }}>Name</label>
              <input type="text" placeholder="Your name" className="exp-input" style={{ width: '100%', border: '1px solid rgba(43, 13, 30, 0.1)' }} />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <label style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '0.75rem', 
                fontWeight: 'bold', 
                letterSpacing: '0.1em', 
                color: 'var(--deep-brown)',
                textTransform: 'uppercase'
              }}>Email</label>
              <input type="email" placeholder="you@example.com" className="exp-input" style={{ width: '100%', border: '1px solid rgba(43, 13, 30, 0.1)' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <label style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '0.75rem', 
                fontWeight: 'bold', 
                letterSpacing: '0.1em', 
                color: 'var(--deep-brown)',
                textTransform: 'uppercase'
              }}>Message</label>
              <textarea placeholder="Share a special request..." className="exp-input" style={{ 
                width: '100%', 
                minHeight: '120px', 
                resize: 'none',
                border: '1px solid rgba(43, 13, 30, 0.1)'
              }}></textarea>
            </div>

            <button type="button" className="btn btn-primary" style={{ 
              backgroundColor: '#2B0D1E', // Dark brown from design system
              color: 'var(--cream)',
              padding: '1.25rem 2.5rem', 
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              border: 'none',
              marginTop: 'var(--space-md)',
              alignSelf: 'center',
              borderRadius: '40px',
              whiteSpace: 'nowrap'
            }}>
              Submit Reservation
            </button>
          </form>
        </div>

        {/* Right Side: Textures & Materials Style Images */}
        <div className="grid-cols-4 fade-in-up stagger-children" style={{ 
          gap: '15px',
          height: 'fit-content'
        }}>
          <div className="shape-arch-1" style={{ backgroundColor: 'transparent', padding: 0 }}>
            <img src="/images/private-dining.png" alt="Texture 1" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '120px 120px 8px 8px' }} />
          </div>
          <div className="shape-arch-1" style={{ backgroundColor: 'transparent', padding: 0, marginTop: '40px' }}>
            <img src="/images/chefs-tasting.png" alt="Texture 2" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '120px 120px 8px 8px' }} />
          </div>
          <div className="shape-arch-1" style={{ backgroundColor: 'transparent', padding: 0 }}>
            <img src="/images/hero-dish.png" alt="Texture 3" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '120px 120px 8px 8px' }} />
          </div>
          <div className="shape-arch-1" style={{ backgroundColor: 'transparent', padding: 0, marginTop: '40px' }}>
            <img src="/images/saffron-burreta.jpg" alt="Texture 4" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '120px 120px 8px 8px' }} />
          </div>
        </div>

      </div>
    </section>
  );
}
