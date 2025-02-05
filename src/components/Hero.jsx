import React from 'react';

function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative w-full">
        <img
          src="https://img.freepik.com/premium-photo/luxury-dark-living-room-interior-with-gray-sofa_180507-175.jpg"
          className="w-full h-[60vh] md:h-[80vh] object-cover rounded-bl-[25vw]"
          alt="Luxury Living Room"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-16">
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-lg md:text-5xl font-bold py-1 animated-gradient-text">
              Think beyond
            </h1>
            <h1 className="text-base md:text-5xl font-bold pb-3 animated-gradient-text">
              Your Ads
            </h1>
            <p className="text-sm md:text-lg text-white">
              We are driving brand success through innovation, creativity, and strategic excellence.
            </p>
            <div className="flex justify-center md:justify-start mt-5">
              <button className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg font-semibold border-2 md:border-4 border-white hover:text-violet-400 transition-all duration-300 hover:border-violet-400">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
