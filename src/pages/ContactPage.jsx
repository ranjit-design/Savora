import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  const headerRef = useScrollAnimation();
  const infoRef = useScrollAnimation();
  const formRef = useScrollAnimation();

  return (
    <div className="page-wrapper" style={{ backgroundColor: 'var(--dark-bg)', color: 'var(--cream)', minHeight: '100vh', padding: '100px 20px' }}>
      <header className="page-header text-center fade-in-up" ref={headerRef} style={{ marginBottom: '60px' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', color: 'var(--gold)', fontSize: '3.5rem' }}>Get in Touch</h1>
        <p style={{ fontFamily: 'var(--font-sans)', maxWidth: '600px', margin: '0 auto', color: '#aaa' }}>We look forward to welcoming you.</p>
      </header>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', maxWidth: '1200px', margin: '0 auto' }}>
        <div ref={infoRef} className="fade-in-up" style={{ flex: '1 1 300px' }}>
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={24} /> Location
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', lineHeight: '1.6', marginTop: '10px' }}>
              123 Culinary Avenue<br />
              Metropolis, NY 10001
            </p>
          </div>
          
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Clock size={24} /> Hours
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', lineHeight: '1.6', marginTop: '10px' }}>
              Wednesday - Sunday: 5:00 PM - 10:30 PM<br />
              Monday - Tuesday: Closed
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={24} /> Contact
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', lineHeight: '1.6', marginTop: '10px' }}>
              (555) 123-4567<br />
              info@savoraone.com
            </p>
          </div>
        </div>
        
        <div ref={formRef} className="fade-in-up" style={{ flex: '1 1 400px', backgroundColor: 'var(--deep-brown)', padding: '40px', borderRadius: '12px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--gold)', marginBottom: '30px' }}>Send a Message</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '15px', borderRadius: '6px', border: 'none', backgroundColor: '#fff', fontFamily: 'var(--font-sans)' }} />
            <input type="email" placeholder="Email Address" style={{ width: '100%', padding: '15px', borderRadius: '6px', border: 'none', backgroundColor: '#fff', fontFamily: 'var(--font-sans)' }} />
            <textarea placeholder="Message" rows="5" style={{ width: '100%', padding: '15px', borderRadius: '6px', border: 'none', backgroundColor: '#fff', fontFamily: 'var(--font-sans)', resize: 'vertical' }}></textarea>
            <button type="button" className="btn btn-primary" style={{ backgroundColor: 'var(--gold)', color: 'var(--deep-brown)', padding: '15px', border: 'none', borderRadius: '6px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
