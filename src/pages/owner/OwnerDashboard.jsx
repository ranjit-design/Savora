import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  LogOut, 
  LayoutDashboard, 
  UtensilsCrossed, 
  ShoppingBag, 
  CalendarDays, 
  Settings,
  TrendingUp,
  Plus
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import '../Dashboard.css';
import { api } from '../../api';

export default function OwnerDashboard() {
  const { user, logout } = useAuth();
  const token = user?.accessToken;
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [dashboardData, setDashboardData] = useState(null);
  
  const [menus, setMenus] = useState([]);
  const [orders, setOrders] = useState([]);
  const [reservations, setReservations] = useState([]);
  
  const [restaurantSettings, setRestaurantSettings] = useState({
    name: '', address: '', phone: '', tagline: '', hours: '', map_embed_url: '', description: ''
  });
  const [savingSettings, setSavingSettings] = useState(false);
  
  const [loading, setLoading] = useState(true);
  
  const [isAddingMenu, setIsAddingMenu] = useState(false);
  const [newMenu, setNewMenu] = useState({ 
    name: '', description: '', price: '', location: '', image: null,
    full_description: '', chef: '', prep_time: '', serving_size: '', ingredients: ''
  });

  const handleAddMenu = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', newMenu.name);
      formData.append('description', newMenu.description);
      formData.append('price', newMenu.price);
      formData.append('location', newMenu.location);
      if (newMenu.image) {
        formData.append('image', newMenu.image);
      }
      
      formData.append('full_description', newMenu.full_description);
      formData.append('chef', newMenu.chef);
      formData.append('prep_time', newMenu.prep_time);
      formData.append('serving_size', newMenu.serving_size);
      formData.append('ingredients', newMenu.ingredients);

      const added = await api.createMenuItem(formData, token);
      setMenus([added, ...menus]);
      setIsAddingMenu(false);
      setNewMenu({ 
        name: '', description: '', price: '', location: '', image: null,
        full_description: '', chef: '', prep_time: '', serving_size: '', ingredients: ''
      });
    } catch (err) {
      console.error("Error creating menu item", err);
      alert("Failed to create menu item. Make sure you are an owner and logged in.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (activeTab === 'overview') {
          const data = await api.getOwnerDashboard(token);
          setDashboardData(data);
        } else if (activeTab === 'menus') {
          const data = await api.getMenus(token);
          setMenus(data);
        } else if (activeTab === 'orders') {
          const data = await api.getOrders(token);
          setOrders(data);
        } else if (activeTab === 'reservations') {
          const data = await api.getReservations(token);
          setReservations(data);
        } else if (activeTab === 'settings') {
          const data = await api.getMyRestaurant(token);
          setRestaurantSettings(data);
        }
      } catch (err) {
        console.error("Error fetching data", err);
      } finally {
        setLoading(false);
      }
    };
    if (token) fetchData();
  }, [token, activeTab]);

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setSavingSettings(true);
    try {
      await api.updateMyRestaurant(restaurantSettings, token);
      alert('Restaurant settings updated successfully!');
    } catch (err) {
      console.error('Failed to update settings', err);
      alert('Failed to update settings.');
    } finally {
      setSavingSettings(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="owner-dashboard">
      <div className="dashboard-container">
        
        <header className="dashboard-header">
          <div className="dashboard-title">
            <h1>{dashboardData?.restaurant_name || 'Restaurant'} Overview</h1>
            <p>Welcome back, {user?.name || 'Chef'}. Here's what's happening today.</p>
          </div>
          <div className="dashboard-actions">
            <button className="btn btn-terracotta" style={{ padding: '10px 20px' }} onClick={() => { setActiveTab('menus'); setIsAddingMenu(true); }}>
              <Plus size={16} /> New Menu Item
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
                className={`sidebar-item ${activeTab === 'menus' ? 'active' : ''}`}
                onClick={() => setActiveTab('menus')}
              >
                <UtensilsCrossed /> Manage Menus
              </div>
              <div 
                className={`sidebar-item ${activeTab === 'orders' ? 'active' : ''}`}
                onClick={() => setActiveTab('orders')}
              >
                <ShoppingBag /> Orders
              </div>
              <div 
                className={`sidebar-item ${activeTab === 'reservations' ? 'active' : ''}`}
                onClick={() => setActiveTab('reservations')}
              >
                <CalendarDays /> Reservations
              </div>
              <div 
                className={`sidebar-item ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                <Settings /> Settings
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="dashboard-main">
            {loading ? (
              <div style={{ padding: '50px', textAlign: 'center', color: 'var(--gray-500)' }}>Loading data...</div>
            ) : dashboardData?.error && activeTab === 'overview' ? (
               <div style={{ padding: '50px', textAlign: 'center', color: 'var(--terracotta)' }}>{dashboardData.error}</div>
            ) : activeTab === 'overview' && dashboardData ? (
              <>
                {/* Metrics */}
                <div className="metrics-grid">
                  <div className="metric-card gold">
                    <div className="metric-info">
                      <h3>Today's Orders</h3>
                      <div className="metric-value">{dashboardData.metrics.todays_orders}</div>
                      <div className="metric-trend positive">
                        <TrendingUp size={14} /> +12% from yesterday
                      </div>
                    </div>
                    <div className="metric-icon">
                      <ShoppingBag size={24} />
                    </div>
                  </div>

                  <div className="metric-card terracotta">
                    <div className="metric-info">
                      <h3>Revenue</h3>
                      <div className="metric-value">${dashboardData.metrics.revenue.toLocaleString()}</div>
                      <div className="metric-trend positive">
                        <TrendingUp size={14} /> +5.4% from yesterday
                      </div>
                    </div>
                    <div className="metric-icon">
                      <TrendingUp size={24} />
                    </div>
                  </div>

                  <div className="metric-card olive">
                    <div className="metric-info">
                      <h3>Pending Reservations</h3>
                      <div className="metric-value">{dashboardData.metrics.pending_reservations}</div>
                      <div className="metric-trend">
                        <span>For tonight's service</span>
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
                    <h2>Recent Orders</h2>
                    <Link to="#" className="section-link" onClick={(e) => { e.preventDefault(); setActiveTab('orders'); }}>View All</Link>
                  </div>
                  
                  <div className="activity-list">
                    {dashboardData.recent_orders.length === 0 && <p style={{ color: 'var(--gray-500)' }}>No recent orders.</p>}
                    {dashboardData.recent_orders.map((order, idx) => (
                      <div className="activity-item" key={idx}>
                        <div className="activity-avatar">
                          {order.customer.charAt(0)}
                        </div>
                        <div className="activity-details">
                          <h4>{order.customer}</h4>
                          <p>{order.id} • {order.items} items • {order.time}</p>
                        </div>
                        <div className="activity-amount">
                          {order.total}
                        </div>
                        <div className={`badge badge-${order.status}`}>
                          {order.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : activeTab === 'settings' ? (
              <div className="dashboard-section">
                <div className="section-header">
                  <h2>Restaurant Settings</h2>
                </div>
                <form onSubmit={handleSaveSettings} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div className="form-group">
                    <label>Restaurant Name</label>
                    <input type="text" className="form-control" value={restaurantSettings.name || ''} onChange={e => setRestaurantSettings({...restaurantSettings, name: e.target.value})} style={{ width: '100%', boxSizing: 'border-box', padding: '10px' }} />
                  </div>
                  <div className="form-group">
                    <label>Tagline</label>
                    <input type="text" className="form-control" value={restaurantSettings.tagline || ''} onChange={e => setRestaurantSettings({...restaurantSettings, tagline: e.target.value})} style={{ width: '100%', boxSizing: 'border-box', padding: '10px' }} placeholder="e.g. Authentic Taste of Nepal" />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" rows="4" value={restaurantSettings.description || ''} onChange={e => setRestaurantSettings({...restaurantSettings, description: e.target.value})} style={{ width: '100%', boxSizing: 'border-box', padding: '10px' }}></textarea>
                  </div>
                  <div className="form-row">
                    <div className="form-group" style={{ flex: 1 }}>
                      <label>Address</label>
                      <input type="text" className="form-control" value={restaurantSettings.address || ''} onChange={e => setRestaurantSettings({...restaurantSettings, address: e.target.value})} style={{ width: '100%', boxSizing: 'border-box', padding: '10px' }} />
                    </div>
                    <div className="form-group" style={{ flex: 1 }}>
                      <label>Phone</label>
                      <input type="text" className="form-control" value={restaurantSettings.phone || ''} onChange={e => setRestaurantSettings({...restaurantSettings, phone: e.target.value})} style={{ width: '100%', boxSizing: 'border-box', padding: '10px' }} />
                    </div>
                    <div className="form-group" style={{ flex: 1 }}>
                      <label>Hours</label>
                      <input type="text" className="form-control" value={restaurantSettings.hours || ''} onChange={e => setRestaurantSettings({...restaurantSettings, hours: e.target.value})} style={{ width: '100%', boxSizing: 'border-box', padding: '10px' }} placeholder="e.g. 10:00 AM - 10:00 PM" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Map Embed URL (src link for iframe)</label>
                    <input type="text" className="form-control" value={restaurantSettings.map_embed_url || ''} onChange={e => setRestaurantSettings({...restaurantSettings, map_embed_url: e.target.value})} style={{ width: '100%', boxSizing: 'border-box', padding: '10px' }} />
                  </div>
                  <div style={{ marginTop: '10px' }}>
                    <button type="submit" className="btn btn-terracotta" disabled={savingSettings}>
                      {savingSettings ? 'Saving...' : 'Save Settings'}
                    </button>
                  </div>
                </form>
              </div>
            ) : activeTab === 'menus' ? (
              <div className="dashboard-section">
                <div className="section-header">
                  <h2>Manage Menus</h2>
                  {!isAddingMenu && (
                    <button className="btn btn-terracotta" onClick={() => setIsAddingMenu(true)}>
                      <Plus size={16} /> Add Item
                    </button>
                  )}
                </div>
                {isAddingMenu && (
                  <form onSubmit={handleAddMenu} className="add-menu-form" style={{ backgroundColor: 'var(--cream)', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                    <h3 style={{ marginBottom: '15px' }}>Add New Food Set</h3>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label>Food Name</label>
                      <input type="text" required className="form-control" value={newMenu.name} onChange={e => setNewMenu({...newMenu, name: e.target.value})} style={{ width: '100%', boxSizing: 'border-box', padding: '10px' }} />
                    </div>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label>Description</label>
                      <textarea required className="form-control" rows="5" value={newMenu.description} onChange={e => setNewMenu({...newMenu, description: e.target.value})} style={{ width: '100%', boxSizing: 'border-box', padding: '10px' }}></textarea>
                    </div>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label>Price (Rs.)</label>
                      <input type="number" required className="form-control" value={newMenu.price} onChange={e => setNewMenu({...newMenu, price: e.target.value})} style={{ width: '100%', boxSizing: 'border-box', padding: '10px' }} />
                    </div>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label>Location</label>
                      <input type="text" required className="form-control" value={newMenu.location} onChange={e => setNewMenu({...newMenu, location: e.target.value})} style={{ width: '100%', boxSizing: 'border-box', padding: '10px' }} />
                    </div>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label>Full Story/Description (for Detail Page)</label>
                      <textarea className="form-control" rows="6" value={newMenu.full_description} onChange={e => setNewMenu({...newMenu, full_description: e.target.value})} style={{ width: '100%', boxSizing: 'border-box', padding: '10px' }}></textarea>
                    </div>
                    <div className="form-row" style={{ marginBottom: '15px' }}>
                      <div className="form-group" style={{ flex: 1 }}>
                        <label>Chef Name</label>
                        <input type="text" className="form-control" value={newMenu.chef} onChange={e => setNewMenu({...newMenu, chef: e.target.value})} style={{ width: '100%', boxSizing: 'border-box', padding: '10px' }} />
                      </div>
                      <div className="form-group" style={{ flex: 1 }}>
                        <label>Prep Time</label>
                        <input type="text" placeholder="e.g. 20 mins" className="form-control" value={newMenu.prep_time} onChange={e => setNewMenu({...newMenu, prep_time: e.target.value})} style={{ width: '100%', boxSizing: 'border-box', padding: '10px' }} />
                      </div>
                      <div className="form-group" style={{ flex: 1 }}>
                        <label>Serving Size</label>
                        <input type="text" placeholder="e.g. 2 persons" className="form-control" value={newMenu.serving_size} onChange={e => setNewMenu({...newMenu, serving_size: e.target.value})} style={{ width: '100%', boxSizing: 'border-box', padding: '10px' }} />
                      </div>
                    </div>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label>Ingredients (comma separated)</label>
                      <input type="text" className="form-control" value={newMenu.ingredients} onChange={e => setNewMenu({...newMenu, ingredients: e.target.value})} style={{ width: '100%', boxSizing: 'border-box', padding: '10px' }} />
                    </div>
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                      <label>Image (Optional)</label>
                      <input type="file" className="form-control" accept="image/*" onChange={e => setNewMenu({...newMenu, image: e.target.files[0]})} style={{ width: '100%', boxSizing: 'border-box', padding: '8px' }} />
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button type="submit" className="btn btn-terracotta">Save</button>
                      <button type="button" className="btn btn-outline" onClick={() => setIsAddingMenu(false)}>Cancel</button>
                    </div>
                  </form>
                )}
                <div className="activity-list">
                  {menus.length === 0 && <p style={{ color: 'var(--gray-500)' }}>No menu items found.</p>}
                  {menus.map((item) => (
                    <div className="activity-item" key={item.id}>
                      <div className="activity-details">
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                      </div>
                      <div className="activity-amount">
                        ${item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : activeTab === 'orders' ? (
              <div className="dashboard-section">
                <div className="section-header">
                  <h2>All Orders</h2>
                </div>
                <div className="activity-list">
                  {orders.length === 0 && <p style={{ color: 'var(--gray-500)' }}>No orders found.</p>}
                  {orders.map((order) => (
                    <div className="activity-item" key={order.id}>
                      <div className="activity-avatar">{order.customer_name?.charAt(0) || 'C'}</div>
                      <div className="activity-details">
                        <h4>{order.customer_name || 'Guest'}</h4>
                        <p>{order.items?.length || 0} items • {new Date(order.created_at).toLocaleDateString()}</p>
                      </div>
                      <div className="activity-amount">
                        ${order.total_amount}
                      </div>
                      <div className={`badge badge-${order.status.toLowerCase()}`}>
                        {order.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : activeTab === 'reservations' ? (
              <div className="dashboard-section">
                <div className="section-header">
                  <h2>All Reservations</h2>
                </div>
                <div className="activity-list">
                  {reservations.length === 0 && <p style={{ color: 'var(--gray-500)' }}>No reservations found.</p>}
                  {reservations.map((res) => (
                    <div className="activity-item" key={res.id}>
                      <div className="activity-avatar"><CalendarDays size={18} /></div>
                      <div className="activity-details">
                        <h4>{new Date(res.reservation_datetime).toLocaleDateString()} at {new Date(res.reservation_datetime).toLocaleTimeString()}</h4>
                        <p>Party of {res.party_size}</p>
                      </div>
                      <div className={`badge badge-${res.status.toLowerCase()}`}>
                        {res.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : activeTab === 'settings' ? (
              <div className="dashboard-section">
                <div className="section-header">
                  <h2>Settings</h2>
                </div>
                <p style={{ color: 'var(--gray-500)' }}>Update your restaurant information, business hours, and notification preferences.</p>
                <div className="form-group" style={{ marginTop: '20px' }}>
                  <label>Restaurant Name</label>
                  <input type="text" className="form-control" defaultValue={dashboardData?.restaurant_name} />
                </div>
                <button className="btn btn-terracotta" style={{ marginTop: '10px' }}>Save Changes</button>
              </div>
            ) : null}
          </main>
        </div>
      </div>
    </div>
  );
}
