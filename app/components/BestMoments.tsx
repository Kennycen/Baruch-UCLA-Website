"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const BestMoments = (): React.JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const totalSlides: number = 4;

  const goToSlide = (index: number): void => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.children[0].clientWidth;
      sliderRef.current.style.transform = `translateX(-${
        index * slideWidth
      }px)`;
    }
  };

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);

    const handleResize = (): void => {
      goToSlide(currentSlide);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(slideInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentSlide]);

  useEffect(() => {
    goToSlide(currentSlide);
  }, [currentSlide]);

  const handleNextClick = (): void => {
    nextSlide();
  };

  const handlePrevClick = (): void => {
    prevSlide();
  };

  return (
    <section id="moment" className="bg-[#e9a033] px-4 py-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#992933]">
        Best Moments
      </h1>
      <div className="flex items-center justify-center mb-7">
        <button
          id="prev"
          className="md:p-2 p-1 bg-black/30 md:mr-6 mr-2 rounded-full hover:bg-black/50 cursor-pointer"
          onClick={handlePrevClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
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

        <div className="w-full max-w-5xl overflow-hidden relative">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            id="slider"
          >
            <Image
              src="/images/misc/slider1.JPG"
              className="w-full flex-shrink-0 rounded-2xl"
              alt="Slide 1"
              width={800}
              height={320}
            />
            <Image
              src="/images/misc/slider2.JPG"
              className="w-full flex-shrink-0 rounded-2xl"
              alt="Slide 2"
              width={800}
              height={320}
            />
            <Image
              src="/images/misc/slider3.JPG"
              className="w-full flex-shrink-0 rounded-2xl"
              alt="Slide 3"
              width={800}
              height={320}
            />
            <Image
              src="/images/misc/slider4.JPG"
              className="w-full flex-shrink-0 rounded-2xl"
              alt="Slide 4"
              width={800}
              height={320}
            />
          </div>
        </div>

        <button
          id="next"
          className="p-1 md:p-2 bg-black/30 md:ml-6 ml-2 rounded-full hover:bg-black/50 cursor-pointer"
          onClick={handleNextClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
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
    </section>
  );
};

export default BestMoments;
