import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { CheckCircle2, Loader2, Trash2 } from 'lucide-react';
import { api } from '../api';
import './CheckoutPage.css';

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart, removeFromCart } = useCart();
  const { user, logout, setRedirectAfterLogin } = useAuth();
  const token = user?.accessToken;
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!user) {
      setRedirectAfterLogin('/checkout');
      navigate('/login', { replace: true });
    }
  }, [user, navigate, setRedirectAfterLogin]);
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: '',
    email: user?.email || '',
    deliveryLocation: ''
  });
  
  const [step, setStep] = useState(1);
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  if (!user) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const payload = {
        customer_name: formData.name,
        customer_phone: formData.phone,
        customer_email: formData.email,
        delivery_location: formData.deliveryLocation,
        items: cartItems.map(item => ({
          item_name: item.name,
          item_price: item.price,
          quantity: item.quantity
        }))
      };

      // Ensure API has createOrder
      const data = await api.createOrder(payload, token);
      
      setSuccess(true);
      clearCart();
      setTimeout(() => navigate('/customer/dashboard', { state: { activeTab: 'orders' } }), 2500);
    } catch (err) {
      if (err.message === 'Unauthorized') {
        setError('Session expired. Please log in again.');
        setTimeout(() => {
          logout();
          navigate('/login');
        }, 2000);
      } else {
        setError('Failed to place order. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="checkout-success page-wrapper">
        <CheckCircle2 size={64} className="success-icon" />
        <h2>Order Confirmed!</h2>
        <p>Your culinary experience is being prepared.</p>
        <p className="redirect-text">Redirecting to your dashboard...</p>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty page-wrapper">
        <h2>Your Cart is Empty</h2>
        <button className="btn btn-primary" onClick={() => navigate('/menu')}>Browse Menu</button>
      </div>
    );
  }

  return (
    <div className="checkout-page page-wrapper">
      <div className="checkout-container">
        {step === 1 ? (
          <div className="checkout-step-1">
            <div className="checkout-header">
              <h1>Review Your Order</h1>
              <p className="checkout-subtitle">Verify your selected items before proceeding.</p>
            </div>
            
            <div className="cart-items-grid">
              {cartItems.map(item => (
                <div className="cart-item-card" key={item.id}>
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                    <span className="cart-item-quantity">{item.quantity}</span>
                  </div>
                  <div className="cart-item-info">
                    <div className="cart-item-header">
                      <h3>{item.name}</h3>
                      <button 
                        className="cart-item-delete" 
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item"
                        title="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <p className="cart-item-loc">{item.location}</p>
                    <div className="cart-item-price-row">
                      <span className="cart-item-price">Rs.{item.price.toLocaleString()}</span>
                      <span className="cart-item-subtotal">Rs.{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="checkout-total-section">
              <div className="summary-total">
                <span>Total Amount</span>
                <span className="total-value">Rs.{cartTotal.toLocaleString()}</span>
              </div>
              <button 
                className="btn btn-primary btn-full proceed-btn" 
                onClick={() => {
                  setStep(2);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="checkout-step-2">
            <div className="checkout-step-2-inner">
              <div className="checkout-image-side">
                <img src="/images/checkout_illustration.jpg" alt="Checkout Art" className="checkout-art" />
                <div className="checkout-art-overlay">
                  <h3>Almost There</h3>
                  <p>Your culinary journey awaits.</p>
                </div>
              </div>
              <div className="checkout-form-side">
                <div className="checkout-header-small">
                  <h1>Contact Details</h1>
                  <p className="checkout-subtitle">Where should we reach you for this order?</p>
                </div>
                
                <form className="checkout-form" onSubmit={handleSubmit}>
                  <div className="form-section">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+977 98..." />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                    </div>
                    <div className="form-group">
                      <label>Delivery Location *</label>
                      <input type="text" name="deliveryLocation" value={formData.deliveryLocation} onChange={handleChange} required placeholder="e.g. Lazimpat, House 12" />
                    </div>
                  </div>

                  {error && <div className="checkout-error">{error}</div>}
                  
                  <div className="form-actions">
                    <button type="button" className="btn btn-outline" onClick={() => setStep(1)}>
                      Back to Order
                    </button>
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                      {loading ? <Loader2 className="spinner" size={20} /> : 'Confirm Order — Rs.' + cartTotal.toLocaleString()}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
