import { useEffect, useRef, useState } from "react";
import FadeIn from "../animation/FadeIn";
import VimeoPlayer from "../homepage/IntroVideo";

interface TestimonialCardProps {
  author: string;
  content: string;
  videoUrl: string;
  highlights?: string[];
  videoPosition?: 'left' | 'right';
  autoplay?: boolean;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  author,
  content,
  videoUrl,
  highlights = [],
  videoPosition = 'left',
  autoplay = false,
  className = '',
}) => {
  const [isInView, setIsInView] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Check if content is scrollable
  useEffect(() => {
    const checkScrollable = () => {
      if (contentScrollRef.current) {
        const { scrollHeight, clientHeight } = contentScrollRef.current;
        setShowScrollHint(scrollHeight > clientHeight);
      }
    };

    checkScrollable();
    window.addEventListener('resize', checkScrollable);

    return () => {
      window.removeEventListener('resize', checkScrollable);
    };
  }, [content]);

  const handleScroll = (direction: 'up' | 'down') => {
    if (contentScrollRef.current) {
      const scrollAmount = 200;
      const currentScroll = contentScrollRef.current.scrollTop;
      const newScroll = direction === 'down' 
        ? currentScroll + scrollAmount 
        : currentScroll - scrollAmount;
      
      contentScrollRef.current.scrollTo({
        top: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const contentSection = (
    <div className="flex-1 flex flex-col h-full overflow-hidden relative">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{author}</h3>
        {highlights.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {highlights.slice(0, 2).map((highlight, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
              >
                {highlight}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div 
        ref={contentScrollRef}
        className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
        onWheel={(e) => {
          // Prevent smooth scroll from interfering
          e.stopPropagation();
        }}
        onTouchMove={(e) => {
          // Prevent smooth scroll from interfering on mobile
          e.stopPropagation();
        }}
      >
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
          {content}
        </p>
      </div>

      {/* Scroll Control Buttons */}
      {showScrollHint && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
          <button
            onClick={() => handleScroll('up')}
            className="bg-white/80 hover:bg-white backdrop-blur-sm text-gray-700 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Scroll up"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
          <button
            onClick={() => handleScroll('down')}
            className="bg-white/80 hover:bg-white backdrop-blur-sm text-gray-700 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Scroll down"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      )}
    </div>
  );

  const videoSection = videoUrl ? (
    <div className="flex-1 h-full min-h-[300px] lg:min-h-full">
      <VimeoPlayer
        videoUrl={videoUrl}
        autoplay={autoplay}
        muted={!autoplay}
        className="h-full"
      />
    </div>
  ) : null;

  return (
    <FadeIn inView={isInView} up={true} delay={0.2}>
      <div
        ref={cardRef}
        className={`bg-white rounded-2xl shadow-lg overflow-hidden h-[600px] ${className}`}
      >
        <div className="h-full p-6 lg:p-8">
          <div
            className={`flex flex-col lg:flex-row gap-6 lg:gap-8 h-full ${
              videoPosition === 'right' ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {videoSection}
            {contentSection}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default TestimonialCard;