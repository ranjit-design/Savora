import React, { createContext, useContext, useState } from 'react';
import { api } from '../api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    // Check localStorage for persisted login
    const saved = localStorage.getItem('savora_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [redirectAfterLogin, setRedirectAfterLogin] = useState(null);

  const login = async (email, password) => {
    try {
      const data = await api.login(email, password);
      const token = data.access;
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      
      const payload = JSON.parse(jsonPayload);
      
      const userObj = { 
        name: payload.username || 'User', 
        email: payload.email,
        role: payload.role,
        accessToken: data.access,
        refreshToken: data.refresh
      };
      
      setUser(userObj);
      localStorage.setItem('savora_user', JSON.stringify(userObj));
      return userObj;
    } catch (error) {
      console.error("Login Error:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('savora_user');
  };

  const loginWithToken = (access, refresh, userData) => {
    const userObj = {
        name: userData.name || userData.username || 'User',
        email: userData.email,
        role: userData.role,
        accessToken: access,
        refreshToken: refresh
    };
    setUser(userObj);
    localStorage.setItem('savora_user', JSON.stringify(userObj));
    return userObj;
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, loginWithToken, logout, isAuthenticated, redirectAfterLogin, setRedirectAfterLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
