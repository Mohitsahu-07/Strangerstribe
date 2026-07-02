'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'slide-left' | 'slide-right' | 'fade-in' | 'scale-up';
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds
  className?: string;
  threshold?: number; // Trigger threshold (0.0 to 1.0)
  once?: boolean; // If true, animates only once
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 800,
  className = '',
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -60px 0px', // Triggers slightly before the element fully enters viewport
      }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // Initial styles before triggering animation
  const getInitialStyles = () => {
    switch (animation) {
      case 'fade-up':
        return { opacity: 0, transform: 'translateY(40px)' };
      case 'slide-left':
        return { opacity: 0, transform: 'translateX(-50px)' };
      case 'slide-right':
        return { opacity: 0, transform: 'translateX(50px)' };
      case 'scale-up':
        return { opacity: 0, transform: 'scale(0.95)' };
      case 'fade-in':
      default:
        return { opacity: 0 };
    }
  };

  // Active styles after element enters view
  const getActiveStyles = () => {
    switch (animation) {
      case 'fade-up':
        return { opacity: 1, transform: 'translateY(0)' };
      case 'slide-left':
      case 'slide-right':
        return { opacity: 1, transform: 'translateX(0)' };
      case 'scale-up':
        return { opacity: 1, transform: 'scale(1)' };
      case 'fade-in':
      default:
        return { opacity: 1 };
    }
  };

  const style: React.CSSProperties = {
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', // Smooth easeOutExpo
    willChange: 'transform, opacity',
    ...(isVisible ? getActiveStyles() : getInitialStyles()),
  };

  return (
    <div ref={elementRef} style={style} className={className}>
      {children}
    </div>
  );
}
