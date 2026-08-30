import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  LogOut, 
  LayoutDashboard, 
  ShoppingBag, 
  CalendarDays, 
  Heart, 
  Settings,
  Star,
  MapPin,
  Trash2,
  Save
} from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import '../Dashboard.css';
import { api } from '../../api';

export default function CustomerDashboard() {
  const { user, logout } = useAuth();
  const token = user?.accessToken;
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.activeTab || 'overview');
  
  const [dashboardData, setDashboardData] = useState(null);
  const [orders, setOrders] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [profile, setProfile] = useState(null);
  
  const [loading, setLoading] = useState(true);

  // Profile Form State
  const [profileForm, setProfileForm] = useState({ phone: '', notes: '' });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (activeTab === 'overview') {
          const data = await api.getCustomerDashboard(token);
          setDashboardData(data);
        } else if (activeTab === 'orders') {
          const data = await api.getOrders(token);
          setOrders(data);
        } else if (activeTab === 'reservations') {
          const data = await api.getReservations(token);
          setReservations(data);
        } else if (activeTab === 'favorites') {
          const data = await api.getFavorites(token);
          setFavorites(data);
        } else if (activeTab === 'settings') {
          const data = await api.getProfiles(token);
          if (data && data.length > 0) {
            setProfile(data[0]);
            setProfileForm({ phone: data[0].phone || '', notes: data[0].notes || '' });
          }
        }
      } catch (err) {
        console.error(`Error fetching ${activeTab} data`, err);
      } finally {
        setLoading(false);
      }
    };
    if (token) fetchData();
  }, [token, activeTab]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleRemoveFavorite = async (id) => {
    try {
      await api.removeFavorite(id, token);
      setFavorites(favorites.filter(f => f.id !== id));
    } catch (err) {
      console.error("Failed to remove favorite", err);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      if (profile) {
        await api.updateProfile(profile.id, profileForm, token);
        alert('Profile updated successfully!');
      }
    } catch (err) {
      console.error("Failed to update profile", err);
      alert('Failed to update profile.');
    }
  };

  return (
    <div className="owner-dashboard">
      <div className="dashboard-container">
        
        <header className="dashboard-header">
          <div className="dashboard-title">
            <h1>My Profile</h1>
            <p>Welcome back, {user?.name || user?.first_name || 'Guest'}. Discover your next culinary journey.</p>
          </div>
          <div className="dashboard-actions">
            <button className="btn btn-terracotta" style={{ padding: '10px 20px' }} onClick={() => navigate('/menu')}>
              <MapPin size={16} /> Explore Places
            </button>
            <button className="btn btn-outline" onClick={handleLogout} style={{ padding: '10px 20px' }}>
              <LogOut size={16} /> Logout
            </button>
          </div>
        </header>

        <div className="dashboard-grid">
          {/* Sidebar */}
          <aside className="dashboard-sidebar">
            <nav className="sidebar-nav">
              <div 
                className={`sidebar-item ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                <LayoutDashboard /> Overview
              </div>
              <div 
                className={`sidebar-item ${activeTab === 'orders' ? 'active' : ''}`}
                onClick={() => setActiveTab('orders')}
              >
                <ShoppingBag /> Order History
              </div>
              <div 
                className={`sidebar-item ${activeTab === 'reservations' ? 'active' : ''}`}
                onClick={() => setActiveTab('reservations')}
              >
                <CalendarDays /> Reservations
              </div>
              <div 
                className={`sidebar-item ${activeTab === 'favorites' ? 'active' : ''}`}
                onClick={() => setActiveTab('favorites')}
              >
                <Heart /> Saved Places
              </div>
              <div 
                className={`sidebar-item ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                <Settings /> Profile Settings
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="dashboard-main">
            {loading ? (
              <div style={{ padding: '50px', textAlign: 'center', color: 'var(--gray-500)' }}>Loading...</div>
            ) : activeTab === 'overview' && dashboardData ? (
              <>
                {/* Metrics */}
                <div className="metrics-grid">
                  <div className="metric-card gold">
                    <div className="metric-info">
                      <h3>Loyalty Points</h3>
                      <div className="metric-value">{dashboardData.metrics.loyalty_points.toLocaleString()}</div>
                      <div className="metric-trend positive">
                        <Star size={14} /> Gold Tier Member
                      </div>
                    </div>
                    <div className="metric-icon">
                      <Star size={24} />
                    </div>
                  </div>

                  <div className="metric-card terracotta">
                    <div className="metric-info">
                      <h3>Recent Orders</h3>
                      <div className="metric-value">{dashboardData.metrics.recent_orders_count}</div>
                      <div className="metric-trend">
                        <span>In the last 30 days</span>
                      </div>
                    </div>
                    <div className="metric-icon">
                      <ShoppingBag size={24} />
                    </div>
                  </div>

                  <div className="metric-card olive">
                    <div className="metric-info">
                      <h3>Upcoming Bookings</h3>
                      <div className="metric-value">{dashboardData.metrics.upcoming_bookings}</div>
                      <div className="metric-trend positive">
                        <span>Check reservations tab</span>
                      </div>
                    </div>
                    <div className="metric-icon">
                      <CalendarDays size={24} />
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="dashboard-section">
                  <div className="section-header">
                    <h2>Recent Activity</h2>
                  </div>
                  
                  <div className="activity-list">
                    {dashboardData.recent_activity && dashboardData.recent_activity.length > 0 ? dashboardData.recent_activity.map((activity, idx) => (
                      <div className="activity-item" key={idx}>
                        <div className="activity-avatar">
                          {activity.entity.charAt(0)}
                        </div>
                        <div className="activity-details">
                          <h4>{activity.entity}</h4>
                          <p>{activity.id} • {activity.action} • {activity.time}</p>
                        </div>
                        <div className="activity-amount">
                          {activity.amount}
                        </div>
                        <div className={`badge badge-${activity.status}`}>
                          {activity.status}
                        </div>
                      </div>
                    )) : (
                      <p style={{ color: 'var(--gray-500)', padding: '20px' }}>No recent activity.</p>
                    )}
                  </div>
                </div>
              </>
            ) : activeTab === 'orders' ? (
              <div className="dashboard-section">
                <div className="section-header">
                  <h2>Order History</h2>
                </div>
                <div className="activity-list">
                  {orders.length > 0 ? orders.map((order, idx) => (
                    <div className="activity-item" key={idx}>
                      <div className="activity-avatar"><ShoppingBag size={20} /></div>
                      <div className="activity-details">
                        <h4>Order #{order.id?.substring(0, 8)}</h4>
                        <p>{new Date(order.created_at).toLocaleString()} • {order.items?.length || 0} items</p>
                      </div>
                      <div className="activity-amount">${parseFloat(order.total_amount).toFixed(2)}</div>
                      <div className={`badge badge-${order.status.toLowerCase()}`}>{order.status}</div>
                    </div>
                  )) : (
                    <p style={{ color: 'var(--gray-500)', padding: '20px' }}>You haven't placed any orders yet.</p>
                  )}
                </div>
              </div>
            ) : activeTab === 'reservations' ? (
              <div className="dashboard-section">
                <div className="section-header">
                  <h2>Reservations</h2>
                </div>
                <div className="activity-list">
                  {reservations.length > 0 ? reservations.map((res, idx) => (
                    <div className="activity-item" key={idx}>
                      <div className="activity-avatar"><CalendarDays size={20} /></div>
                      <div className="activity-details">
                        <h4>Reservation #{res.id?.substring(0, 8)}</h4>
                        <p>{new Date(res.reservation_datetime).toLocaleString()} • Party of {res.party_size}</p>
                      </div>
                      <div className={`badge badge-${res.status.toLowerCase()}`}>{res.status}</div>
                    </div>
                  )) : (
                    <p style={{ color: 'var(--gray-500)', padding: '20px' }}>You don't have any reservations.</p>
                  )}
                </div>
              </div>
            ) : activeTab === 'favorites' ? (
              <div className="dashboard-section">
                <div className="section-header">
                  <h2>Saved Places</h2>
                </div>
                <div className="activity-list">
                  {favorites.length > 0 ? favorites.map((fav, idx) => (
                    <div className="activity-item" key={idx}>
                      <div className="activity-avatar" style={{ backgroundColor: 'var(--terracotta)' }}><Heart size={20} color="white" /></div>
                      <div className="activity-details">
                        <h4>{fav.restaurant_name}</h4>
                        <p>{fav.restaurant_address || 'Address not available'}</p>
                      </div>
                      <button 
                        className="btn btn-outline" 
                        style={{ padding: '8px', color: 'var(--terracotta)', borderColor: 'var(--terracotta)' }}
                        onClick={() => handleRemoveFavorite(fav.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  )) : (
                    <div style={{ padding: '40px 20px', textAlign: 'center' }}>
                      <Heart size={48} color="var(--gray-300)" style={{ margin: '0 auto 20px' }} />
                      <p style={{ color: 'var(--gray-500)' }}>You haven't saved any places yet.</p>
                      <button className="btn btn-terracotta" style={{ marginTop: '20px' }} onClick={() => navigate('/menu')}>
                        Explore Restaurants
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : activeTab === 'settings' ? (
              <div className="dashboard-section">
                <div className="section-header">
                  <h2>Profile Settings</h2>
                </div>
                <div style={{ padding: '20px', maxWidth: '600px' }}>
                  <form onSubmit={handleProfileUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontWeight: '500', color: 'var(--gray-700)' }}>Phone Number</label>
                      <input 
                        type="text" 
                        value={profileForm.phone} 
                        onChange={(e) => setProfileForm({...profileForm, phone: e.target.value})}
                        style={{ padding: '12px', border: '1px solid var(--gray-300)', borderRadius: '8px', width: '100%' }}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontWeight: '500', color: 'var(--gray-700)' }}>Dietary Notes / Special Requests</label>
                      <textarea 
                        value={profileForm.notes} 
                        onChange={(e) => setProfileForm({...profileForm, notes: e.target.value})}
                        style={{ padding: '12px', border: '1px solid var(--gray-300)', borderRadius: '8px', width: '100%', minHeight: '120px' }}
                        placeholder="Any allergies or dietary preferences?"
                      />
                    </div>
                    <button type="submit" className="btn btn-gold" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px' }}>
                      <Save size={18} /> Save Changes
                    </button>
                  </form>
                </div>
              </div>
            ) : null}
          </main>
        </div>
      </div>
    </div>
  );
}
