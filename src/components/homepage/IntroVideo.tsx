import React, { useRef, useEffect } from 'react';
import Player from '@vimeo/player';

// Declare Vimeo on window for TypeScript
declare global {
  interface Window {
    Vimeo?: {
      Player: typeof Player;
    };
  }
}

const IntroVideo: React.FC = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);

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
      if (iframeRef.current && !playerRef.current) {
        playerRef.current = new Player(iframeRef.current);
        
        // Unmute the video when player is ready
        playerRef.current.ready().then(() => {
          playerRef.current?.setVolume(1).catch((error) => {
            console.error('Error setting volume:', error);
          });
        });
      }

      if (videoContainerRef.current && playerRef.current) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (playerRef.current) {
                if (entry.isIntersecting) {
                  playerRef.current.play().catch((error) => {
                    // Handle potential errors like user gesture requirement
                    if (error.name === 'NotAllowedError') {
                      console.warn('Autoplay prevented by browser. User interaction required.');
                    } else {
                      console.error('Error playing video:', error);
                    }
                  });
                } else {
                  playerRef.current.pause().catch((error) => {
                    console.error('Error pausing video:', error);
                  });
                }
              }
            });
          },
          { threshold: 0.5 } // Trigger when 50% of the video is visible
        );

        observer.observe(videoContainerRef.current);
      }
    });

    return () => {
      if (observer && videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
      if (playerRef.current) {
        playerRef.current.destroy().catch((error) => {
          console.error('Error destroying Vimeo player:', error);
        });
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={videoContainerRef} className="h-[40em]">
      <iframe
        ref={iframeRef}
        title="vimeo-player"
        src="https://player.vimeo.com/video/1141925851?h=2593f6619c&api=1&autoplay=0&loop=0&byline=0&portrait=0&title=0&muted=0"
        width="100%"
        height="100%"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default IntroVideo;