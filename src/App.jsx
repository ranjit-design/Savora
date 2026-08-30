import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ExperiencesPage from './pages/ExperiencesPage';
import ReservationsPage from './pages/ReservationsPage';
import StoryPage from './pages/StoryPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import DishDetailPage from './pages/DishDetailPage';
import ScrollToTop from './components/ui/ScrollToTop';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import OwnerDashboard from './pages/owner/OwnerDashboard';
import CustomerDashboard from './pages/customer/CustomerDashboard';
import CheckoutPage from './pages/CheckoutPage';
import OrderTrackingPage from './pages/OrderTrackingPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <ScrollToTop />
          <div className="app">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/experiences" element={<ExperiencesPage />} />
                <Route path="/reservations" element={<ReservationsPage />} />
                <Route path="/story" element={<StoryPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dish/:slug" element={<DishDetailPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/order-tracking/:orderId" element={<OrderTrackingPage />} />
                
                {/* Protected Routes */}
                <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
                </Route>

                <Route element={<ProtectedRoute allowedRoles={['RESTAURANT_OWNER']} />}>
                  <Route path="/owner/dashboard" element={<OwnerDashboard />} />
                </Route>

                <Route element={<ProtectedRoute allowedRoles={['CUSTOMER']} />}>
                  <Route path="/customer/dashboard" element={<CustomerDashboard />} />
                </Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
