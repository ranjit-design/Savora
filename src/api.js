// API helper for authentication

const BASE_URL = 'http://127.0.0.1:8000'; // Default Django server URL

export const api = {
  login: async (email, password) => {
    const res = await fetch(`${BASE_URL}/api/v1/auth/token/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error('Login failed');
    return res.json();
  },
  
  register: async (userData) => {
    const res = await fetch(`${BASE_URL}/api/v1/auth/register/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.detail || JSON.stringify(errorData) || 'Registration failed');
    }
    return res.json();
  },

  getAdminDashboard: async (token) => {
    const res = await fetch(`${BASE_URL}/api/v1/analytics/dashboard/admin/`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Failed to fetch admin dashboard');
    return res.json();
  },

  getOwnerDashboard: async (token) => {
    const res = await fetch(`${BASE_URL}/api/v1/analytics/dashboard/owner/`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Failed to fetch owner dashboard');
    return res.json();
  },

  getCustomerDashboard: async (token) => {
    const res = await fetch(`${BASE_URL}/api/v1/analytics/dashboard/customer/`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Failed to fetch customer dashboard');
    return res.json();
  },

  createOrder: async (payload, token) => {
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;
    
    const res = await fetch(`${BASE_URL}/api/v1/orders/`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    });
    if (res.status === 401) throw new Error('Unauthorized');
    if (!res.ok) throw new Error('Failed to create order');
    return res.json();
  },

  getOrderById: async (orderId) => {
    const res = await fetch(`${BASE_URL}/api/v1/orders/${orderId}/`);
    if (!res.ok) throw new Error('Failed to fetch order');
    return res.json();
  },

  getOrders: async (token) => {
    const res = await fetch(`${BASE_URL}/api/v1/orders/`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Failed to fetch orders');
    return res.json();
  },

  getReservations: async (token) => {
    const res = await fetch(`${BASE_URL}/api/v1/reservations/`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Failed to fetch reservations');
    return res.json();
  },

  getFavorites: async (token) => {
    const res = await fetch(`${BASE_URL}/api/v1/auth/favorites/`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Failed to fetch favorites');
    return res.json();
  },

  addFavorite: async (restaurantId, token) => {
    const res = await fetch(`${BASE_URL}/api/v1/auth/favorites/`, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ restaurant: restaurantId })
    });
    if (!res.ok) throw new Error('Failed to add favorite');
    return res.json();
  },

  removeFavorite: async (favoriteId, token) => {
    const res = await fetch(`${BASE_URL}/api/v1/auth/favorites/${favoriteId}/`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Failed to remove favorite');
    return true;
  },

  getProfiles: async (token) => {
    const res = await fetch(`${BASE_URL}/api/v1/auth/profiles/`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Failed to fetch profile');
    return res.json();
  },

  updateProfile: async (profileId, data, token) => {
    const res = await fetch(`${BASE_URL}/api/v1/auth/profiles/${profileId}/`, {
      method: 'PATCH',
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Failed to update profile');
    return res.json();
  },

  getMenus: async (token = null) => {
    const headers = {};
    if (token) headers['Authorization'] = `Bearer ${token}`;
    
    const res = await fetch(`${BASE_URL}/api/v1/menus/items/`, {
      headers
    });
    if (!res.ok) throw new Error('Failed to fetch menus');
    return res.json();
  },

  getMenuItemBySlug: async (slug) => {
    const res = await fetch(`${BASE_URL}/api/v1/menus/items/${slug}/`);
    if (!res.ok) throw new Error('Failed to fetch menu item details');
    return res.json();
  },

  createMenuItem: async (payload, token) => {
    const isFormData = payload instanceof FormData;
    const headers = {
      'Authorization': `Bearer ${token}`
    };
    if (!isFormData) {
      headers['Content-Type'] = 'application/json';
    }

    const res = await fetch(`${BASE_URL}/api/v1/menus/items/`, {
      method: 'POST',
      headers,
      body: isFormData ? payload : JSON.stringify(payload)
    });
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.detail || JSON.stringify(errorData) || 'Failed to create menu item');
    }
    return res.json();
  },

  getAllUsers: async (token) => {
    const res = await fetch(`${BASE_URL}/api/v1/auth/users/`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Failed to fetch users');
    return res.json();
  },

  getRestaurants: async () => {
    // This is public, no token needed
    const res = await fetch(`${BASE_URL}/api/v1/core/restaurants/`);
    if (!res.ok) throw new Error('Failed to fetch restaurants');
    return res.json();
  },

  getMyRestaurant: async (token) => {
    const res = await fetch(`${BASE_URL}/api/v1/core/restaurants/my_restaurant/`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Failed to fetch restaurant details');
    return res.json();
  },

  updateMyRestaurant: async (payload, token) => {
    const res = await fetch(`${BASE_URL}/api/v1/core/restaurants/my_restaurant/`, {
      method: 'PATCH',
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error('Failed to update restaurant details');
    return res.json();
  },

  submitInquiry: async (payload, token) => {
    const res = await fetch(`${BASE_URL}/api/v1/reservations/inquiries/`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to submit inquiry');
    }
    return res.json();
  }
};
