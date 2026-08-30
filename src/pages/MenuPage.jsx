import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ArtMenuSection from '../components/ArtMenuSection';
import FoodMenuSection from '../components/FoodMenuSection';

export default function MenuPage() {
  const headerRef = useScrollAnimation();
  const artMenuRef = useScrollAnimation();

  return (
    <div className="page-wrapper" style={{ backgroundColor: 'var(--cream)', minHeight: '100vh', paddingBottom: 'var(--space-5xl)' }}>
      <ArtMenuSection />
      <FoodMenuSection />
    </div>
  );
}
