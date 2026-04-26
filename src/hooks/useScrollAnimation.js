import { useEffect, useRef } from 'react';

const useScrollAnimation = (options = { threshold: 0.15 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once visible, stop observing to keep animation state
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      // Find all children with fade-in-up class or the element itself
      const targets = currentElement.querySelectorAll('.fade-in-up');
      if (targets.length > 0) {
        targets.forEach(t => observer.observe(t));
      } else if (currentElement.classList.contains('fade-in-up')) {
        observer.observe(currentElement);
      }
    }

    return () => {
      if (currentElement) {
        const targets = currentElement.querySelectorAll('.fade-in-up');
        targets.forEach(t => observer.unobserve(t));
        if (currentElement.classList.contains('fade-in-up')) {
          observer.unobserve(currentElement);
        }
      }
    };
  }, [options]);

  return elementRef;
};

export default useScrollAnimation;
