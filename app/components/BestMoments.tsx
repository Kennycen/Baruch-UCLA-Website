"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const slides = Array.from({ length: 14 }, (_, i) => ({
  src: `/misc/BESTMOMENTS/BESTMOMENTS_${i + 1}.jpg`,
  alt: `Best moment ${i + 1}`,
}));

const BestMoments = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const totalSlides = slides.length;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [totalSlides]);

  useEffect(() => {
    const goToSlide = (index: number): void => {
      if (sliderRef.current?.children[0]) {
        const slideWidth = (sliderRef.current.children[0] as HTMLElement)
          .clientWidth;
        sliderRef.current.style.transform = `translateX(-${
          index * slideWidth
        }px)`;
      }
    };

    goToSlide(currentSlide);

    const handleResize = (): void => {
      goToSlide(currentSlide);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentSlide]);

  return (
    <section id="moment" className="bg-[#e9a033] px-4 py-10 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#992933]">
        Best Moments
      </h1>
      <div className="flex items-center justify-center gap-2 md:gap-6 mb-5">
        <button
          id="prev"
          aria-label="Previous moment"
          className="shrink-0 p-1.5 md:p-2.5 bg-[#992933]/85 rounded-full hover:bg-[#992933] transition-colors cursor-pointer"
          onClick={() =>
            setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out will-change-transform"
            id="slider"
          >
            {slides.map((slide) => (
              <div
                key={slide.src}
                className="relative w-full flex-shrink-0 aspect-[5/2]"
              >
                <Image
                  src={slide.src}
                  className="object-cover"
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority={slide.src === slides[0].src}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          id="next"
          aria-label="Next moment"
          className="shrink-0 p-1.5 md:p-2.5 bg-[#992933]/85 rounded-full hover:bg-[#992933] transition-colors cursor-pointer"
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % totalSlides)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="flex justify-center gap-1.5" role="tablist" aria-label="Best moments slides">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Go to moment ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide
                ? "w-6 bg-[#992933]"
                : "w-2 bg-[#992933]/35 hover:bg-[#992933]/55"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default BestMoments;
