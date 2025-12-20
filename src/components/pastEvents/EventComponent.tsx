import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Texts from "../Texts";
import FadeIn from "../animation/FadeIn";

interface EventData {
  eventName: string;
  description?: string;
  images: string[];
}

interface EventComponentProps {
  event: EventData;
  className?: string;
}

const EventComponent: React.FC<EventComponentProps> = ({
  event,
  className = "",
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handlePrevious = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? event.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) =>
      prev === event.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className={`w-full max-w-6xl mx-auto ${className}`}>
      {/* Event Name */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-800">
        {event.eventName}
      </h2>

      {/* Description */}
      {event.description && (
        <FadeIn>
          <Texts className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
            {event.description}
          </Texts>
        </FadeIn>
      )}

      {/* Main Image Display */}
      <div className="relative w-full mb-6">
        <div className="relative aspect-video w-full bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
          {/* <FadeIn> */}
            <img
              src={event.images[selectedImageIndex]}
              alt={`${event.eventName} - Image ${selectedImageIndex + 1}`}
              className="w-full h-full object-contain"
            />
          {/* </FadeIn> */}

          {/* Navigation Arrows */}
          {event.images.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            {selectedImageIndex + 1} / {event.images.length}
          </div>
        </div>
      </div>

      {/* Thumbnail Slider */}
      {event.images.length > 1 && (
        <div className="relative">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-4">
            <div className="flex gap-3 px-2">
              {event.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden transition-all duration-200 ${
                    selectedImageIndex === index
                      ? "ring-4 ring-blue-500 scale-105 shadow-lg"
                      : "ring-2 ring-gray-200 hover:ring-gray-300 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${event.eventName} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventComponent;
