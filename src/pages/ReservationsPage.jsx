import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { Calendar, Users, Clock } from 'lucide-react';

export default function ReservationsPage() {
  const headerRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  
  const [partySize, setPartySize] = useState('2');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  return (
    <div className="page-wrapper" style={{ backgroundColor: 'var(--cream)', color: 'var(--deep-brown)', minHeight: '100vh', padding: '100px 20px' }}>
      <header className="page-header text-center fade-in-up" ref={headerRef}>
        <h1 style={{ fontFamily: 'var(--font-serif)', color: 'var(--deep-brown)', fontSize: '3rem' }}>Reservations</h1>
        <p style={{ fontFamily: 'var(--font-sans)', maxWidth: '600px', margin: '0 auto', color: 'var(--terracotta)' }}>Join us for an unforgettable dining experience.</p>
      </header>

      <div ref={formRef} className="fade-in-up" style={{ maxWidth: '600px', margin: '60px auto', backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-sans)', fontWeight: 'bold', marginBottom: '10px' }}>
              <Users size={20} color="var(--terracotta)" /> Party Size
            </label>
            <select value={partySize} onChange={(e) => setPartySize(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontFamily: 'var(--font-sans)' }}>
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-sans)', fontWeight: 'bold', marginBottom: '10px' }}>
              <Calendar size={20} color="var(--terracotta)" /> Date
            </label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontFamily: 'var(--font-sans)' }} />
          </div>

          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-sans)', fontWeight: 'bold', marginBottom: '10px' }}>
              <Clock size={20} color="var(--terracotta)" /> Time
            </label>
            <select value={time} onChange={(e) => setTime(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontFamily: 'var(--font-sans)' }}>
              <option value="">Select a time</option>
              <option value="17:00">5:00 PM</option>
              <option value="18:30">6:30 PM</option>
              <option value="20:00">8:00 PM</option>
              <option value="21:30">9:30 PM</option>
            </select>
          </div>

          {date && time && (
            <div style={{ backgroundColor: 'var(--cream)', padding: '15px', borderRadius: '6px', borderLeft: '4px solid var(--olive-green)', marginTop: '10px' }}>
              <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--olive-green)' }}>✓ Table available. Complete booking below.</p>
            </div>
          )}

          <button type="button" className="btn btn-primary" style={{ backgroundColor: 'var(--terracotta)', color: '#fff', padding: '15px', border: 'none', borderRadius: '6px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
            Find Table
          </button>
        </form>
      </div>
    </div>
  );
}
