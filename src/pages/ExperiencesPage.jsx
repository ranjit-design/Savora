import React from 'react';
import ExperiencesSection from '../components/ExperiencesSection';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function ExperiencesPage() {
  return (
    <div className="page-wrapper" style={{ backgroundColor: 'var(--cream)', minHeight: '100vh', paddingBottom: '0' }}>
      <ExperiencesSection />
    </div>
  );
}
