import React from 'react';
import StorySection from '../components/StorySection';

export default function StoryPage() {
  return (
    <div className="page-wrapper" style={{ backgroundColor: 'var(--cream)', minHeight: '100vh', paddingBottom: '0' }}>
      <StorySection />
    </div>
  );
}
