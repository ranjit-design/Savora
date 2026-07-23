import { Link } from 'react-router-dom';
import { ChefHat, Leaf, Glasses, CheckCircle2, Heart, Award } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ArtMenuSection from '../components/ArtMenuSection';
import ExperiencesSection from '../components/ExperiencesSection';
import ReservationSection from '../components/ReservationSection';
import StorySection from '../components/StorySection';

export default function HomePage() {
  const heroRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const artMenuRef = useScrollAnimation();
  const philosophyRef = useScrollAnimation();
  const storyRef = useScrollAnimation();

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-blob-1"></div>
        <div className="hero-blob-2"></div>
        
        <div className="hero-container">
          <div className="hero-content fade-in-up">
            <h1 className="hero-title">
              <span className="line line-where">Where</span>
              <span className="line line-art">Art</span>
              <span className="line line-becomes">Becomes</span>
              <span className="line line-flavor">Flavor</span>
            </h1>
            
            <p className="hero-description">
              A culinary canvas where timeless traditions meet modern artistry. 
              Every plate is a muse. Every moment, a masterpiece.
            </p>
            
            <div className="hero-actions">
              <a href="#reservations" className="btn btn-primary">
                Reserve A Table
              </a>
              <Link to="/menu" className="btn btn-outline">
                Explore The Menu
              </Link>
            </div>
          </div>
          
          <div className="hero-visual fade-in">
            <div className="hero-image-main">
              <img src="/images/hero-restaurant.webp" alt="Savora One dining room" />
            </div>
            <div className="hero-dish-overlay slide-in-left">
              <img src="/images/hero-dish.webp" alt="Signature plated dish" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" ref={featuresRef}>
        <div className="features-grid stagger-children">
          
          {/* Chef's Tasting Card */}
          <Link to="/experiences" className="feature-card">
            <div className="feature-card-badge">
              <ChefHat />
            </div>
            <div className="feature-card-image">
              <img src="/images/chefs-tasting.webp" alt="Chef's Tasting Experience" />
            </div>
            <div className="feature-card-content">
              <h3 className="feature-card-title">Chef's Tasting</h3>
              <p className="feature-card-text">
                An immersive journey through creativity and technique. Multi-course. Seasonal. Unforgettable.
              </p>
              <span className="feature-card-link">
                Discover Experience
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </Link>

          {/* Seasonal Menu Card */}
          <Link to="/menu" className="feature-card">
            <div className="feature-card-badge">
              <Leaf />
            </div>
            <div className="feature-card-image">
              <img src="/images/seasonal-menu.webp" alt="Seasonal Menu" />
            </div>
            <div className="feature-card-content">
              <h3 className="feature-card-title">Seasonal Menu</h3>
              <p className="feature-card-text">
                Inspired by nature's rhythm. Thoughtfully sourced. Beautifully composed.
              </p>
              <span className="feature-card-link">
                View Menu
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </Link>

          {/* Private Dining Card */}
          <Link to="/private-dining" className="feature-card">
            <div className="feature-card-badge">
              <Glasses />
            </div>
            <div className="feature-card-image">
              <img src="/images/private-dining.webp" alt="Private Dining Room" />
            </div>
            <div className="feature-card-content">
              <h3 className="feature-card-title">Private Dining</h3>
              <p className="feature-card-text">
                Intimate gatherings, exceptional settings crafted around you.
              </p>
              <span className="feature-card-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </Link>

        </div>
      </section>

      {/* Art Menu Section */}
      <ArtMenuSection />

      {/* Experiences Section */}
      <ExperiencesSection />

      {/* Reservation Section */}
      <ReservationSection />

      {/* Story Section */}
      <StorySection />
    </div>
  );
}
