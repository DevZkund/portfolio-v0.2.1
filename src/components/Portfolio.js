import React from 'react';
import TypingAnimation from './TypingAnimation';

const Portfolio = () => {
  
  return (
    <section
      id="Portfolio"
      data-aos="fade-down"
      data-aos-duration="1200"
      className="w-full pt-24 md:pt-32 lg:pt-40 bg-gradient-to-b from-background to-muted"
    >
      <div className="container lg:px-8 md:px-4 grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold tracking-tighter lg:text-6xl md:text-4xl">
            I'm a <TypingAnimation />
          </h1>
          <h1 className="text-2xl font-bold tracking-tighter lg:text-6xl md:text-4xl">
            Developer
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-md lg:text-lg text-sm">
            I'm a passionate frontend developer with a keen eye for design
            and a love for creating beautiful, responsive web applications.
          </p>
        </div>
        <div
          className="relative w-full max-w-md mx-auto"
          data-aos="zoom-out"
          data-aos-duration="3000"
        >
          <img
            src="./images/about.png"
            width="400"
            height="400"
            alt="Devzkund"
            className="w-full h-auto rounded-full object-cover object-top shadow-lg"
            style={{ aspectRatio: '400 / 400', objectFit: 'cover' }}
          />
          <div className="absolute -bottom-4 -right-4 bg-primary rounded-full w-12 h-12 flex items-center justify-center text-primary-foreground shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-yellow-400"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" x2="9.01" y1="9" y2="9"></line>
              <line x1="15" x2="15.01" y1="9" y2="9"></line>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
