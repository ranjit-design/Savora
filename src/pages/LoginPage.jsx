import React, { useState } from 'react';
import { User, Lock, EyeOff, Eye, Mail, Briefcase } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { api } from '../api';
import './LoginPage.css';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  
  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Signup state
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirm, setSignupConfirm] = useState('');
  const [signupRole, setSignupRole] = useState('CUSTOMER');

  const [errorMsg, setErrorMsg] = useState('');
  
  const { login, redirectAfterLogin, setRedirectAfterLogin } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (!loginEmail || !loginPassword) return;
    
    try {
      const user = await login(loginEmail, loginPassword);
      
      let defaultRedirect = '/';
      if (user.role === 'ADMIN') defaultRedirect = '/admin/dashboard';
      else if (user.role === 'RESTAURANT_OWNER') defaultRedirect = '/owner/dashboard';
      else if (user.role === 'CUSTOMER') defaultRedirect = '/customer/dashboard';

      if (user.role === 'CUSTOMER') {
        const pendingEnquiryStr = localStorage.getItem('pending_enquiry');
        if (pendingEnquiryStr) {
          try {
            const pendingEnquiry = JSON.parse(pendingEnquiryStr);
            await api.submitInquiry(pendingEnquiry, user.accessToken);
            localStorage.removeItem('pending_enquiry');
            navigate('/customer/dashboard');
            return;
          } catch (err) {
            console.error("Failed to submit pending enquiry:", err);
          }
        }
      }

      if (redirectAfterLogin) {
        navigate(redirectAfterLogin);
        setRedirectAfterLogin(null);
      } else {
        navigate(defaultRedirect);
      }
    } catch (err) {
      setErrorMsg('Invalid credentials. Please try again.');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (signupPassword !== signupConfirm) {
      setErrorMsg('Passwords do not match');
      return;
    }

    try {
      // Split name into first and last for django
      const nameParts = signupName.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';
      
      await api.register({
        email: signupEmail,
        username: signupEmail.split('@')[0],
        password: signupPassword,
        first_name: firstName,
        last_name: lastName,
        role: signupRole
      });
      
      // Auto-login after signup
      const user = await login(signupEmail, signupPassword);
      
      let defaultRedirect = '/';
      if (user.role === 'ADMIN') defaultRedirect = '/admin/dashboard';
      else if (user.role === 'RESTAURANT_OWNER') defaultRedirect = '/owner/dashboard';
      else if (user.role === 'CUSTOMER') defaultRedirect = '/customer/dashboard';

      if (user.role === 'CUSTOMER') {
        const pendingEnquiryStr = localStorage.getItem('pending_enquiry');
        if (pendingEnquiryStr) {
          try {
            const pendingEnquiry = JSON.parse(pendingEnquiryStr);
            await api.submitInquiry(pendingEnquiry, user.accessToken);
            localStorage.removeItem('pending_enquiry');
            navigate('/customer/dashboard');
            return;
          } catch (err) {
            console.error("Failed to submit pending enquiry:", err);
          }
        }
      }

      navigate(defaultRedirect);
    } catch (err) {
      setErrorMsg(err.message || 'Signup failed');
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-container">

        {/* Form Card with 3D Flip */}
        <div className="login-card-container">
          <div className={`flip-card-inner ${isSignUp ? 'flipped' : ''}`}>
            
            {/* Front: Login Form */}
            <div className="flip-card-front login-card">
              <div className="login-header">
                <h2>Welcome Back!</h2>
                <p>Login to continue</p>
              </div>

              <form className="login-form" onSubmit={handleLogin}>
                {errorMsg && !isSignUp && <div className="error-message" style={{color:'red', fontSize:'14px', marginBottom:'10px'}}>{errorMsg}</div>}
                <div className="input-group">
                  <div className="input-icon">
                    <User size={18} />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
                  <div className="input-icon">
                    <Lock size={18} />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password" 
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
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

              <form className="login-form" onSubmit={handleSignUp}>
                {errorMsg && isSignUp && <div className="error-message" style={{color:'red', fontSize:'14px', marginBottom:'10px'}}>{errorMsg}</div>}
                <div className="input-group">
                  <div className="input-icon">
                    <User size={18} />
                  </div>
                  <input type="text" placeholder="Full Name" value={signupName} onChange={e => setSignupName(e.target.value)} required />
                </div>
                
                <div className="input-group">
                  <div className="input-icon">
                    <Mail size={18} />
                  </div>
                  <input type="email" placeholder="Email Address" value={signupEmail} onChange={e => setSignupEmail(e.target.value)} required />
                </div>

                <div className="input-group">
                  <div className="input-icon">
                    <Lock size={18} />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password" 
                    value={signupPassword}
                    onChange={e => setSignupPassword(e.target.value)}
                    required
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
                    value={signupConfirm}
                    onChange={e => setSignupConfirm(e.target.value)}
                    required
                  />
                  <div 
                    className="input-action" 
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </div>
                </div>
                
                <div className="input-group role-selector">
                  <div className="input-icon">
                    <Briefcase size={18} />
                  </div>
                  <select 
                    value={signupRole}
                    onChange={e => setSignupRole(e.target.value)}
                    style={{width: '100%', padding: '12px 12px 12px 45px', border: '1px solid #ddd', borderRadius: '8px', background: '#f9f9f9', outline: 'none', color: '#555'}}
                  >
                    <option value="CUSTOMER">I am a Customer</option>
                    <option value="RESTAURANT_OWNER">I am a Restaurant Owner</option>
                  </select>
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
