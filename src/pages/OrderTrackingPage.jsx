import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../api';
import { CheckCircle2, Clock, ChefHat, Truck, ArrowLeft, Loader2 } from 'lucide-react';
import './OrderTrackingPage.css';

export default function OrderTrackingPage() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let intervalId;

    const fetchOrder = async () => {
      try {
        const data = await api.getOrderById(orderId);
        setOrder(data);
        setError(null);
      } catch (err) {
        setError('Failed to load order status. The order may not exist.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
    // Poll every 10 seconds for updates
    intervalId = setInterval(fetchOrder, 10000);

    return () => clearInterval(intervalId);
  }, [orderId]);

  if (loading) {
    return (
      <div className="tracking-page-wrapper loading-state">
        <Loader2 className="spinner" size={48} />
        <p>Loading your order details...</p>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="tracking-page-wrapper error-state">
        <h2>Order Not Found</h2>
        <p>{error}</p>
        <Link to="/" className="btn btn-primary">Return Home</Link>
      </div>
    );
  }

  const steps = [
    { id: 'PENDING', label: 'Order Placed', icon: <Clock size={24} /> },
    { id: 'PREPARING', label: 'Preparing', icon: <ChefHat size={24} /> },
    { id: 'READY', label: 'Out for Delivery / Ready', icon: <Truck size={24} /> },
    { id: 'COMPLETED', label: 'Completed', icon: <CheckCircle2 size={24} /> }
  ];

  const getStepIndex = (status) => {
    const statuses = ['PENDING', 'PREPARING', 'READY', 'COMPLETED'];
    return statuses.indexOf(status);
  };

  const currentStep = getStepIndex(order.status);
  const isCancelled = order.status === 'CANCELLED';

  return (
    <div className="tracking-page-wrapper">
      <div className="tracking-container">
        <div className="tracking-header">
          <Link to="/" className="back-link"><ArrowLeft size={18} /> Back to Home</Link>
          <h1>Track Your Order</h1>
          <p className="order-id">Order #{order.id.split('-')[0]}</p>
        </div>

        {isCancelled ? (
          <div className="cancelled-state">
            <h2>Order Cancelled</h2>
            <p>Your order has been cancelled. Please contact support if you need assistance.</p>
          </div>
        ) : (
          <div className="tracking-timeline-card">
            <div className="timeline">
              {steps.map((step, idx) => {
                const isActive = idx <= currentStep;
                const isCurrent = idx === currentStep;
                return (
                  <div key={step.id} className={`timeline-step ${isActive ? 'active' : ''} ${isCurrent ? 'current' : ''}`}>
                    <div className="step-icon">
                      {step.icon}
                    </div>
                    <div className="step-label">
                      <h3>{step.label}</h3>
                      {isCurrent && <p className="step-status">In Progress</p>}
                      {idx < currentStep && <p className="step-status">Completed</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="order-details-card">
          <h2>Order Summary</h2>
          <div className="order-info-grid">
            <div>
              <p className="info-label">Customer Name</p>
              <p className="info-value">{order.customer_name}</p>
            </div>
            <div>
              <p className="info-label">Delivery Location</p>
              <p className="info-value">{order.delivery_location || 'Dine-in / Pickup'}</p>
            </div>
            <div>
              <p className="info-label">Order Date</p>
              <p className="info-value">{new Date(order.created_at).toLocaleString()}</p>
            </div>
            <div>
              <p className="info-label">Total Amount</p>
              <p className="info-value">Rs.{order.total_amount}</p>
            </div>
          </div>

          <div className="order-items-list">
            <h3>Items</h3>
            {order.items.map((item, idx) => (
              <div key={idx} className="order-item-row">
                <span className="item-qty">{item.quantity}x</span>
                <span className="item-name">{item.item_name}</span>
                <span className="item-price">Rs.{item.item_price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
