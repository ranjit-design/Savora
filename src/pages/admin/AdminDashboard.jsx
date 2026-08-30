import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  LogOut, 
  LayoutDashboard, 
  Users, 
  Store, 
  CreditCard, 
  Settings,
  TrendingUp,
  ShieldAlert
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import '../Dashboard.css';
import { api } from '../../api';

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const token = user?.accessToken;
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [dashboardData, setDashboardData] = useState(null);
  
  const [users, setUsers] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [orders, setOrders] = useState([]);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (activeTab === 'overview') {
          const data = await api.getAdminDashboard(token);
          setDashboardData(data);
        } else if (activeTab === 'users') {
          const data = await api.getAllUsers(token);
          setUsers(data);
        } else if (activeTab === 'restaurants') {
          const data = await api.getRestaurants(token);
          setRestaurants(data);
        } else if (activeTab === 'finances') {
          const data = await api.getOrders(token);
          setOrders(data);
        }
      } catch (err) {
        console.error("Error fetching data", err);
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

  return (
    <div className="owner-dashboard">
      <div className="dashboard-container">
        
        <header className="dashboard-header">
          <div className="dashboard-title">
            <h1>Platform Administration</h1>
            <p>Welcome back, {user?.name || 'Admin'}. Here is your platform overview.</p>
          </div>
          <div className="dashboard-actions">
            <button className="btn btn-terracotta" style={{ padding: '10px 20px' }}>
              <ShieldAlert size={16} /> System Status
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
                className={`sidebar-item ${activeTab === 'users' ? 'active' : ''}`}
                onClick={() => setActiveTab('users')}
              >
                <Users /> Users
              </div>
              <div 
                className={`sidebar-item ${activeTab === 'restaurants' ? 'active' : ''}`}
                onClick={() => setActiveTab('restaurants')}
              >
                <Store /> Restaurants
              </div>
              <div 
                className={`sidebar-item ${activeTab === 'finances' ? 'active' : ''}`}
                onClick={() => setActiveTab('finances')}
              >
                <CreditCard /> Finances
              </div>
              <div 
                className={`sidebar-item ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                <Settings /> Global Settings
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="dashboard-main">
            {loading ? (
              <div style={{ padding: '50px', textAlign: 'center', color: 'var(--gray-500)' }}>Loading data...</div>
            ) : activeTab === 'overview' && dashboardData ? (
              <>
                {/* Metrics */}
                <div className="metrics-grid">
                  <div className="metric-card gold">
                    <div className="metric-info">
                      <h3>Active Restaurants</h3>
                      <div className="metric-value">{dashboardData.metrics.active_restaurants}</div>
                      <div className="metric-trend positive">
                        <TrendingUp size={14} /> +3 this week
                      </div>
                    </div>
                    <div className="metric-icon">
                      <Store size={24} />
                    </div>
                  </div>

                  <div className="metric-card terracotta">
                    <div className="metric-info">
                      <h3>Platform Revenue</h3>
                      <div className="metric-value">${dashboardData.metrics.platform_revenue.toLocaleString()}</div>
                      <div className="metric-trend positive">
                        <TrendingUp size={14} /> +12.5% this month
                      </div>
                    </div>
                    <div className="metric-icon">
                      <CreditCard size={24} />
                    </div>
                  </div>

                  <div className="metric-card olive">
                    <div className="metric-info">
                      <h3>Total Users</h3>
                      <div className="metric-value">{dashboardData.metrics.total_users.toLocaleString()}</div>
                      <div className="metric-trend positive">
                        <TrendingUp size={14} /> +145 new today
                      </div>
                    </div>
                    <div className="metric-icon">
                      <Users size={24} />
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="dashboard-section">
                  <div className="section-header">
                    <h2>Recent Platform Activity</h2>
                    <Link to="#" className="section-link">View Audit Log</Link>
                  </div>
                  
                  <div className="activity-list">
                    {dashboardData.recent_activity.map((activity, idx) => (
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
                    ))}
                  </div>
                </div>
              </>
            ) : activeTab === 'users' ? (
              <div className="dashboard-section">
                <div className="section-header">
                  <h2>Platform Users</h2>
                </div>
                <div className="activity-list">
                  {users.length === 0 && <p style={{ color: 'var(--gray-500)' }}>No users found.</p>}
                  {users.map((u) => (
                    <div className="activity-item" key={u.id}>
                      <div className="activity-avatar">
                        <Users size={18} />
                      </div>
                      <div className="activity-details">
                        <h4>{u.name || 'Anonymous User'}</h4>
                        <p>{u.email}</p>
                      </div>
                      <div className="activity-amount">
                        {new Date(u.date_joined).toLocaleDateString()}
                      </div>
                      <div className={`badge badge-completed`}>
                        {u.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : activeTab === 'restaurants' ? (
              <div className="dashboard-section">
                <div className="section-header">
                  <h2>Active Restaurants</h2>
                </div>
                <div className="activity-list">
                  {restaurants.length === 0 && <p style={{ color: 'var(--gray-500)' }}>No restaurants found.</p>}
                  {restaurants.map((rest) => (
                    <div className="activity-item" key={rest.id}>
                      <div className="activity-avatar">
                        <Store size={18} />
                      </div>
                      <div className="activity-details">
                        <h4>{rest.name}</h4>
                        <p>{rest.address}</p>
                      </div>
                      <div className={`badge badge-${rest.is_active ? 'completed' : 'pending'}`}>
                        {rest.is_active ? 'Active' : 'Inactive'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : activeTab === 'finances' ? (
              <div className="dashboard-section">
                <div className="section-header">
                  <h2>Platform Finances (All Orders)</h2>
                </div>
                <div className="activity-list">
                  {orders.length === 0 && <p style={{ color: 'var(--gray-500)' }}>No orders found.</p>}
                  {orders.map((order) => (
                    <div className="activity-item" key={order.id}>
                      <div className="activity-avatar">
                        <CreditCard size={18} />
                      </div>
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
            ) : activeTab === 'settings' ? (
              <div className="dashboard-section" style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
                <Settings size={48} color="var(--gray-300)" />
                <h2 style={{ color: 'var(--gray-500)', fontFamily: 'var(--font-serif)' }}>
                  Global Settings
                </h2>
                <p style={{ color: 'var(--gray-400)' }}>System configuration is currently managed via Django Admin.</p>
              </div>
            ) : null}
          </main>
        </div>
      </div>
    </div>
  );
}
