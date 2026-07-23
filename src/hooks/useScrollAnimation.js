import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that triggers CSS animations when elements scroll into view.
 * Returns a ref to attach to the container element.
 * Children with animation classes (fade-in-up, fade-in, slide-in-left, slide-in-right, stagger-children)
 * will get 'visible' class added when they enter the viewport.
 */
export default function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    const current = ref.current;
    if (current) {
      const animatedElements = current.querySelectorAll(
        '.fade-in-up, .fade-in, .slide-in-left, .slide-in-right, .stagger-children'
      );
      animatedElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
