import React, { useRef, useEffect, useState } from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // pixels per second
  direction?: 'left' | 'right'; // Simplified for now, as requested behavior is typically horizontal
  pauseOnHover?: boolean;
  className?: string;
  gradient?: boolean;
  gradientColor?: string;
  gap?: number; // gap is less relevant now as we don't loop immediately, but kept for compatibility
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 50,
  direction = 'left',
  pauseOnHover = true,
  className = '',
  gradient = true,
  gradientColor = 'white',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    const calculateMetrics = () => {
      if (containerRef.current && contentRef.current) {
        const newContainerWidth = containerRef.current.offsetWidth;
        const newContentWidth = contentRef.current.scrollWidth;
        
        setContainerWidth(newContainerWidth);
        setContentWidth(newContentWidth);

        const totalDistance = newContainerWidth + newContentWidth;
        setDuration(totalDistance / speed);
      }
    };

    calculateMetrics();
    
    // Recalculate on window resize
    window.addEventListener('resize', calculateMetrics);
    return () => window.removeEventListener('resize', calculateMetrics);
  }, [children, speed]);

  const isHorizontal = direction === 'left' || direction === 'right';

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        // Define CSS variables for the animation
        '--marquee-container-width': `${containerWidth}px`,
        '--marquee-content-width': `${contentWidth}px`,
        '--marquee-duration': `${duration}s`,
      } as React.CSSProperties}
    >
      <style>
        {`
          @keyframes marquee-scroll-left {
            from { transform: translateX(var(--marquee-container-width)); }
            to { transform: translateX(calc(-1 * var(--marquee-content-width))); }
          }
          @keyframes marquee-scroll-right {
            from { transform: translateX(calc(-1 * var(--marquee-content-width))); }
            to { transform: translateX(var(--marquee-container-width)); }
          }
        `}
      </style>

      {/* Gradient Overlays */}
      {gradient && isHorizontal && (
        <>
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${gradientColor}, transparent)`,
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to left, ${gradientColor}, transparent)`,
            }}
          />
        </>
      )}

      {/* Marquee Content */}
      <div
        ref={contentRef}
        className="inline-block whitespace-nowrap"
        style={{
          animationName: `marquee-scroll-${direction}`,
          animationDuration: 'var(--marquee-duration)',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationPlayState: pauseOnHover ? undefined : 'running', // Let CSS hover handle it if needed, or inline style
        }}
        onMouseEnter={(e) => {
          if (pauseOnHover) {
            e.currentTarget.style.animationPlayState = 'paused';
          }
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) {
            e.currentTarget.style.animationPlayState = 'running';
          }
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Marquee;