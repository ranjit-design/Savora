import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function StorySection() {
  const sectionRef = useScrollAnimation();

  return (
    <section 
      ref={sectionRef}
      className="story-section" 
      style={{ position: 'relative', backgroundColor: 'var(--cream)', paddingTop: 'var(--space-2xl)', paddingBottom: '0' }}
    >
      <div style={{
        position: 'relative',
        backgroundImage: 'url(/images/hero-restaurant.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        width: '100%',
        padding: 'var(--space-5xl) 0',
        overflow: 'hidden'
      }}>
        {/* Light Overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 248, 240, 0.85)', zIndex: 1 }}></div>
        
        <div className="art-menu-container" style={{ position: 'relative', zIndex: 10 }}>
            {/* Top Row: Header */}
            <div className="art-menu-top-row" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
              <div className="art-menu-header" style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terracotta)', fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>
                  Story
                </div>
                <h2 className="art-menu-title" style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)', lineHeight: 1.1 }}>
                  <span className="art-line">Stories</span>
                  <span className="art-line">Worth</span>
                  <span className="art-line highlight art-italic">Savoring.</span>
                </h2>
                <div className="art-menu-squiggle" style={{ display: 'flex', justifyContent: 'center' }}>
                  <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6C5 1 9 1 13 6C17 11 21 11 25 6C29 1 33 1 37 6" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="art-dish-desc" style={{ marginTop: 'var(--space-md)', maxWidth: '400px', fontSize: '1rem', lineHeight: 1.6, textAlign: 'center' }}>
                  Moments that linger. Flavors that speak. Gathered here, told with heart. This is our muse, as seen through your eyes.
                </p>
              </div>
            </div>

            {/* Two Images Replacing Testimonials */}
            <div className="grid-cols-2" style={{ gap: 'var(--space-2xl)', marginTop: 'var(--space-2xl)' }}>
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', height: '400px' }}>
                <img src="/images/rose-fig.webp" alt="Savora Signature Dish" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', height: '400px', transform: 'translateY(40px)' }}>
                <img src="/images/seared-scallops.webp" alt="Culinary Artistry" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      
      {/* Horizontal Gallery */}
      <div className="gallery-strip fade-in-up" style={{ 
        display: 'block', 
        width: '100%', 
        height: '350px', 
        overflow: 'hidden', 
        marginTop: 'var(--space-xl)',
        position: 'relative'
      }}>
        <div className="marquee-content" style={{
          display: 'flex',
          width: 'max-content',
          gap: '0',
          animation: 'marquee 25s linear infinite'
        }}>
          {/* First set of images */}
          <img src="/images/saffron-burreta.webp" alt="Gallery 1" style={{ flex: '0 0 auto', width: '35vw', minWidth: '450px', height: '350px', objectFit: 'cover', margin: 0, padding: 0 }} />
          <img src="/images/private-dining.webp" alt="Gallery 2" style={{ flex: '0 0 auto', width: '35vw', minWidth: '450px', height: '350px', objectFit: 'cover', margin: 0, padding: 0 }} />
          <img src="/images/chefs-tasting.webp" alt="Gallery 3" style={{ flex: '0 0 auto', width: '35vw', minWidth: '450px', height: '350px', objectFit: 'cover', margin: 0, padding: 0 }} />
          <img src="/images/hero-restaurant.webp" alt="Gallery 4" style={{ flex: '0 0 auto', width: '35vw', minWidth: '450px', height: '350px', objectFit: 'cover', margin: 0, padding: 0 }} />
          <img src="/images/lamb-ragout.webp" alt="Gallery 5" style={{ flex: '0 0 auto', width: '35vw', minWidth: '450px', height: '350px', objectFit: 'cover', margin: 0, padding: 0 }} />
          
          {/* Duplicate set for seamless looping */}
          <img src="/images/saffron-burreta.webp" alt="Gallery 1" style={{ flex: '0 0 auto', width: '35vw', minWidth: '450px', height: '350px', objectFit: 'cover', margin: 0, padding: 0 }} />
          <img src="/images/private-dining.webp" alt="Gallery 2" style={{ flex: '0 0 auto', width: '35vw', minWidth: '450px', height: '350px', objectFit: 'cover', margin: 0, padding: 0 }} />
          <img src="/images/chefs-tasting.webp" alt="Gallery 3" style={{ flex: '0 0 auto', width: '35vw', minWidth: '450px', height: '350px', objectFit: 'cover', margin: 0, padding: 0 }} />
          <img src="/images/hero-restaurant.webp" alt="Gallery 4" style={{ flex: '0 0 auto', width: '35vw', minWidth: '450px', height: '350px', objectFit: 'cover', margin: 0, padding: 0 }} />
          <img src="/images/lamb-ragout.webp" alt="Gallery 5" style={{ flex: '0 0 auto', width: '35vw', minWidth: '450px', height: '350px', objectFit: 'cover', margin: 0, padding: 0 }} />
        </div>
      </div>

      {/* From Our Journal */}
      <div className="art-menu-container" style={{ padding: 'var(--space-4xl) 0 var(--space-xl) 0' }}>
        <div className="fade-in-up" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-2xl)' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--deep-brown)', fontWeight: 'normal' }}>From Our Journal</h3>
          <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6C5 1 9 1 13 6C17 11 21 11 25 6C29 1 33 1 37 6" stroke="var(--olive-green)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="journal-grid grid-cols-3 stagger-children" style={{ gap: 'var(--space-2xl)' }}>
          {/* Article 1 */}
          <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
            <div className="art-dish-icon icon-purple" style={{ flexShrink: 0, marginTop: '5px' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--deep-brown)', marginBottom: 'var(--space-xs)' }}>Behind the Menu</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>
                The inspirations, memories, and mindful choices that shape what's on your plate.
              </p>
              <Link to="#" style={{ fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.1em', color: 'var(--deep-brown)', textDecoration: 'none', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '5px' }}>
                READ MORE <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

          {/* Article 2 */}
          <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
            <div className="art-dish-icon icon-terracotta" style={{ flexShrink: 0, marginTop: '5px' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--deep-brown)', marginBottom: 'var(--space-xs)' }}>Seasonal Inspiration</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>
                Honoring nature's rhythm with ingredients at their most expressive.
              </p>
              <Link to="#" style={{ fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.1em', color: 'var(--deep-brown)', textDecoration: 'none', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '5px' }}>
                READ MORE <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

          {/* Article 3 */}
          <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
            <div className="art-dish-icon icon-olive" style={{ flexShrink: 0, marginTop: '5px' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8"/><path d="M12 15v6"/><path d="M7 3h10l-1.5 5.5c-1 3.5-3.5 6.5-3.5 6.5s-2.5-3-3.5-6.5L7 3z"/></svg>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--deep-brown)', marginBottom: 'var(--space-xs)' }}>The Art of Plating</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>
                Where technique meets intuition, and every dish becomes a story.
              </p>
              <Link to="#" style={{ fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.1em', color: 'var(--deep-brown)', textDecoration: 'none', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '5px' }}>
                READ MORE <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Embossed Wave Separator */}
      <div className="fade-in" style={{ width: '100%', height: '80px', position: 'relative', marginTop: 'var(--space-xl)', marginBottom: 'var(--space-xl)' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ 
          display: 'block', width: '100%', height: '80px', 
          filter: 'drop-shadow(3px 8px 10px rgba(0,0,0,0.08)) drop-shadow(-3px -4px 6px rgba(255,255,255,0.7))' 
        }}>
           <path d="M0,40 C320,100 420,0 740,40 C1060,80 1200,0 1440,40" stroke="var(--cream)" strokeWidth="18" strokeLinecap="round"/>
        </svg>
      </div>
    </section>
  );
}
