import React, { useRef, useEffect } from 'react';

// Declare Vimeo on window for TypeScript
declare global {
  interface Window {
    Vimeo?: any;
  }
}

interface VimeoPlayerProps {
  videoUrl: string;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const VimeoPlayer: React.FC<VimeoPlayerProps> = ({
  videoUrl,
  className = '',
  autoplay = false,
  loop = false,
  muted = false,
}) => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);

  // Extract video ID from URL
  const getVideoId = (url: string): string => {
    const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    return match ? match[1] : '';
  };

  const videoId = getVideoId(videoUrl);

  useEffect(() => {
    let observer: IntersectionObserver;

    const loadVimeoPlayerSDK = () => {
      return new Promise<void>((resolve) => {
        if (window.Vimeo && window.Vimeo.Player) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = 'https://player.vimeo.com/api/player.js';
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
    };

    loadVimeoPlayerSDK().then(() => {
      if (iframeRef.current && !playerRef.current && window.Vimeo) {
        playerRef.current = new window.Vimeo.Player(iframeRef.current);

        playerRef.current.ready().then(() => {
          playerRef.current?.setVolume(muted ? 0 : 1).catch((error: any) => {
            console.error('Error setting volume:', error);
          });
        });
      }

      if (videoContainerRef.current && playerRef.current) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (playerRef.current) {
                if (entry.isIntersecting && autoplay) {
                  playerRef.current.play().catch((error: any) => {
                    if (error.name === 'NotAllowedError') {
                      console.warn('Autoplay prevented by browser.');
                    } else {
                      console.error('Error playing video:', error);
                    }
                  });
                } else {
                  playerRef.current.pause().catch((error: any) => {
                    console.error('Error pausing video:', error);
                  });
                }
              }
            });
          },
          { threshold: 0.5 }
        );

        observer.observe(videoContainerRef.current);
      }
    });

    return () => {
      if (observer && videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
      if (playerRef.current) {
        playerRef.current.destroy().catch((error: any) => {
          console.error('Error destroying Vimeo player:', error);
        });
        playerRef.current = null;
      }
    };
  }, [videoUrl, autoplay, muted]);
// https://player.vimeo.com/video/1141925851?h=2593f6619c&api=1&autoplay=0&loop=0&byline=0&portrait=0&title=0&muted=0
  return (
    <div ref={videoContainerRef} className={`${className}`}>
      <iframe
        ref={iframeRef}
        title="vimeo-player"
        src={`https://player.vimeo.com/video/${videoId}?api=1&autoplay=0&loop=${loop ? 1 : 0}&byline=0&portrait=0&title=0&muted=${muted ? 1 : 0}`}
        width="100%"
        height="100%"
        className="rounded-lg"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VimeoPlayer;

