import React, { useState } from 'react';
import { User, Lock, EyeOff, Eye, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="login-page-wrapper">
      <div className="login-container">
        {/* Avatar/Illustration */}
        <div className="login-illustration-side">
          <img src="/images/login-avatar.webp" alt="3D Login Illustration" />
        </div>

        {/* Form Card with 3D Flip */}
        <div className="login-card-container">
          <div className={`flip-card-inner ${isSignUp ? 'flipped' : ''}`}>
            
            {/* Front: Login Form */}
            <div className="flip-card-front login-card">
              <div className="login-header">
                <h2>Welcome Back!</h2>
                <p>Login to continue</p>
              </div>

              <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                <div className="input-group">
                  <div className="input-icon">
                    <User size={18} />
                  </div>
                  <input type="text" placeholder="Username / Email" />
                </div>

                <div className="input-group">
                  <div className="input-icon">
                    <Lock size={18} />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password" 
                  />
                  <div 
                    className="input-action" 
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </div>
                </div>

                <div className="forgot-password">
                  <Link to="#">Forgot Password?</Link>
                </div>

                <button type="submit" className="login-btn">
                  Login
                </button>
              </form>

              <div className="divider">
                <span>or continue with</span>
              </div>

              <div className="social-login">
                <button className="social-btn google-btn">
                  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </button>
              </div>

              <div className="signup-prompt">
                Don't have an account? <span className="link-text" onClick={() => setIsSignUp(true)}>Sign Up</span>
              </div>
            </div>

            {/* Back: Sign Up Form */}
            <div className="flip-card-back login-card">
              <div className="login-header">
                <h2>Create Account</h2>
                <p>Join us today</p>
              </div>

              <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                <div className="input-group">
                  <div className="input-icon">
                    <User size={18} />
                  </div>
                  <input type="text" placeholder="Full Name" />
                </div>
                
                <div className="input-group">
                  <div className="input-icon">
                    <Mail size={18} />
                  </div>
                  <input type="email" placeholder="Email Address" />
                </div>

                <div className="input-group">
                  <div className="input-icon">
                    <Lock size={18} />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password" 
                  />
                  <div 
                    className="input-action" 
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </div>
                </div>

                <div className="input-group">
                  <div className="input-icon">
                    <Lock size={18} />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Confirm Password" 
                  />
                  <div 
                    className="input-action" 
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </div>
                </div>

                <button type="submit" className="login-btn">
                  Sign Up
                </button>
              </form>

              <div className="divider">
                <span>or continue with</span>
              </div>

              <div className="social-login">
                <button className="social-btn google-btn">
                  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </button>
              </div>

              <div className="signup-prompt">
                Already have an account? <span className="link-text" onClick={() => setIsSignUp(false)}>Login</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
