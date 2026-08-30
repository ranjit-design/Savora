import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Clock, Phone, Star, ChefHat, Users, ShoppingBag, ArrowLeft, Check, Plus, Minus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { api } from '../api';

export default function DishDetailPage() {
  const { slug } = useParams();
  const { isAuthenticated } = useAuth();
  const heroRef = useScrollAnimation();
  const menuRef = useScrollAnimation();
  const infoRef = useScrollAnimation();
  const mapRef = useScrollAnimation();

  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDish = async () => {
      try {
        setLoading(true);
        const data = await api.getMenuItemBySlug(slug);
        setDish(data);
      } catch (err) {
        console.error(err);
        setError("Dish not found.");
      } finally {
        setLoading(false);
      }
    };
    fetchDish();
  }, [slug]);


  if (loading) {
    return <div style={{ paddingTop: 'calc(var(--nav-height) + var(--space-4xl))', textAlign: 'center' }}>Loading...</div>;
  }

  if (error || !dish) {
    return (
      <div className="page-wrapper" style={{ backgroundColor: 'var(--cream)', minHeight: '100vh', paddingTop: 'calc(var(--nav-height) + var(--space-4xl))' }}>
        <div className="container" style={{ textAlign: 'center', padding: 'var(--space-5xl) 0' }}>
          <h2>{error || 'Dish Not Found'}</h2>
          <p style={{ color: 'var(--gray-500)', marginTop: 'var(--space-md)' }}>The dish you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary" style={{ marginTop: 'var(--space-2xl)', display: 'inline-flex' }}>Back to Home</Link>
        </div>
      </div>
    );
  }

  const restaurantInfo = dish.restaurant || {};
  const ingredientsList = dish.ingredients ? dish.ingredients.split(',').map(i => i.trim()) : [];

  return (
    <div className="page-wrapper" style={{ backgroundColor: 'var(--cream)', minHeight: '100vh', paddingTop: 'var(--nav-height)' }}>

      {/* Hero Banner */}
      <section className="loc-hero" ref={heroRef}>
        <div className="loc-hero-image">
          <img src={dish.image} alt={restaurantInfo.name || 'Restaurant'} />
          <div className="loc-hero-overlay"></div>
        </div>
        <div className="loc-hero-content fade-in-up">
          <Link to="/" className="loc-back-link">
            <ArrowLeft size={18} />
            <span>Back to Menu</span>
          </Link>
          <div className="loc-hero-badge">
            <MapPin size={16} />
            <span>{restaurantInfo.name || 'Restaurant'}</span>
          </div>
          <h1 className="loc-hero-title">{restaurantInfo.name || 'Restaurant'}</h1>
          <p className="loc-hero-tagline">{restaurantInfo.tagline || 'Experience the best tastes'}</p>
        </div>
      </section>

      {/* Location Info Bar */}
      <section className="loc-info-bar" ref={infoRef}>
        <div className="loc-info-bar-inner fade-in-up">
          <div className="loc-info-item">
            <MapPin size={18} />
            <div>
              <span className="loc-info-label">Address</span>
              <span className="loc-info-value">{restaurantInfo.address || dish.location || 'N/A'}</span>
            </div>
          </div>
          <div className="loc-info-item">
            <Clock size={18} />
            <div>
              <span className="loc-info-label">Hours</span>
              <span className="loc-info-value">{restaurantInfo.hours || 'N/A'}</span>
            </div>
          </div>
          <div className="loc-info-item">
            <Phone size={18} />
            <div>
              <span className="loc-info-label">Contact</span>
              <span className="loc-info-value">{restaurantInfo.phone || 'N/A'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="loc-about">
        <div className="loc-container">
          <div className="loc-about-grid">
            <div className="loc-about-text">
              <div className="loc-section-label">About This Location</div>
              <h2 className="loc-section-title">
                Discover <span className="text-accent">{restaurantInfo.name || 'Our Restaurant'}</span>
              </h2>
              <p className="loc-about-desc">{restaurantInfo.description || 'Welcome to our restaurant. Enjoy our finest dishes prepared just for you.'}</p>
            </div>
            <div className="loc-about-image">
              <img src={dish.image} alt={restaurantInfo.name} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dish */}
      <section className="loc-featured" ref={menuRef}>
        <div className="loc-container">
          <div className="loc-section-label" style={{ textAlign: 'center' }}>Signature Dish</div>
          <h2 className="loc-section-title" style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
            Our <span className="text-accent">Star</span> at {restaurantInfo.name || 'Restaurant'}
          </h2>

          <div className="loc-featured-card fade-in-up">
            <div className="loc-featured-image">
              <img src={dish.image} alt={dish.name} />
            </div>
            <div className="loc-featured-info">
              <div className="loc-featured-rating">
                <Star size={16} fill="var(--gold)" color="var(--gold)" />
                <span className="loc-rating-num">{dish.rating || '4.5'}</span>
                <span className="loc-rating-count">({dish.reviews || '0'} reviews)</span>
              </div>
              <h3 className="loc-featured-name">{dish.name}</h3>
              <p className="loc-featured-desc">{dish.full_description || dish.description || 'A delicious dish prepared with fresh ingredients.'}</p>

              <div className="loc-featured-meta">
                <div className="loc-meta-item">
                  <ChefHat size={16} />
                  <span>{dish.chef || 'House Chef'}</span>
                </div>
                <div className="loc-meta-item">
                  <Clock size={16} />
                  <span>{dish.prep_time || '15 mins'}</span>
                </div>
                <div className="loc-meta-item">
                  <Users size={16} />
                  <span>{dish.serving_size || '1 person'}</span>
                </div>
              </div>

              {ingredientsList.length > 0 && (
                <div className="loc-ingredients">
                  <h4>Ingredients</h4>
                  <div className="loc-ingredient-tags">
                    {ingredientsList.map((ing, i) => (
                      <span key={i} className="loc-ingredient-tag">{ing}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="loc-featured-actions">
                <div className="loc-featured-price">
                  <span className="loc-price-label">Price</span>
                  <span className="loc-price-amount">Rs.{Number(dish.price).toLocaleString()}</span>
                </div>
                <OrderButton food={dish} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {restaurantInfo.map_embed_url && (
        <section className="loc-map" ref={mapRef}>
          <div className="loc-container">
            <div className="loc-section-label" style={{ textAlign: 'center' }}>Visit Us</div>
            <h2 className="loc-section-title" style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              Find Us in <span className="text-accent">{restaurantInfo.name}</span>
            </h2>
            <div className="loc-map-container fade-in-up">
              <iframe 
                src={restaurantInfo.map_embed_url}
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${restaurantInfo.name}`}
              ></iframe>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}

// Order Button with quantity selector
function OrderButton({ food, small }) {
  const [quantity, setQuantity] = useState(1);
  const [ordered, setOrdered] = useState(false);
  const { addToCart } = useCart();

  const handleOrder = (e) => {
    e.preventDefault();
    for (let i = 0; i < quantity; i++) {
      addToCart(food);
    }
    setOrdered(true);
    setQuantity(1);
    setTimeout(() => setOrdered(false), 3000);
  };

  return (
    <div className={`loc-order-section ${small ? 'small' : ''}`}>
      <div className="loc-qty-control">
        <button className="loc-qty-btn" onClick={(e) => { e.preventDefault(); setQuantity(Math.max(1, quantity - 1)); }}>
          <Minus size={16} />
        </button>
        <span className="loc-qty-num">{quantity}</span>
        <button className="loc-qty-btn" onClick={(e) => { e.preventDefault(); setQuantity(quantity + 1); }}>
          <Plus size={16} />
        </button>
      </div>
      <button
        className={`loc-order-btn ${ordered ? 'ordered' : ''}`}
        onClick={handleOrder}
      >
        {ordered ? (
          <>
            <Check size={18} />
            <span>Added to Cart!</span>
          </>
        ) : (
          <>
            <ShoppingBag size={18} />
            <span>Add to Cart — Rs.{(food.price * quantity).toLocaleString()}</span>
          </>
        )}
      </button>
    </div>
  );
}
