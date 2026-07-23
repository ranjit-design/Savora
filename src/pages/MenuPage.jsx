import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ArtMenuSection from '../components/ArtMenuSection';

export default function MenuPage() {
  const headerRef = useScrollAnimation();
  const artMenuRef = useScrollAnimation();

  return (
    <div className="page-wrapper" style={{ backgroundColor: 'var(--cream)', minHeight: '100vh', paddingBottom: 'var(--space-5xl)' }}>
      <ArtMenuSection />
    </div>
  );
}
