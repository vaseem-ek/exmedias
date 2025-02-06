import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variant'


function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative w-full">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20230625/pngtree-designer-booth-showcased-in-contemporary-black-studio-room-3d-render-image_3681180.jpg"
          className="w-full h-[60vh] md:h-[90vh] object-cover rounded-bl-[20vw]"
          alt="Luxury Living Room"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-16">
          <div className="text-center md:text-left max-w-2xl">
            <motion.h1
            variants={fadeIn('up',0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}
             className="text-lg md:text-5xl font-bold py-1 animated-gradient-text">
              Think beyond
            </motion.h1>
            <motion.h1
            variants={fadeIn('up',0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false,amount:0.7}} className="text-base md:text-5xl font-bold pb-3 animated-gradient-text">
              Your Ads
            </motion.h1>
            <motion.p
            variants={fadeIn('right',0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}
            className="text-sm md:text-lg text-white">
              We are driving brand success through innovation, creativity, and strategic excellence.
            </motion.p>
            <div className="flex justify-center md:justify-start mt-5">
              <button className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg font-semibold border-2 md:border-4 border-white hover:text-violet-400 text-white transition-all duration-300 hover:border-violet-400">
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
