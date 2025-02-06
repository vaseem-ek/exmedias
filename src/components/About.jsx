import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variant'

function About() {
    return (
        <section id='about' className='px-3 md:px-20 lg:px-40 my-20'>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-[1fr_2fr]'>
                <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <h2 className='text-xl md:text-2xl text-end font-bold'>" Can Break All Acceptations With Existing, Transform Your Business With A Perfect Strategy, Brand Identity Can Resonate With The Respective Community "</h2>
                </motion.div>
                <motion.div
                    variants={fadeIn('left', 0.6)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.8 }}
                >
                    <h2 className='text-slate-800 font-bold mb-3 text-xl md:text-3xl'>The exmedia</h2>
                    <p className='text-slate-600 text-justify'>exmedia is well-experienced and successful company in the segment of branding and advertising for 17 years. We have transformed the business ideas of about 1000+ valuable clients to position their brands in respective environments, We have enabled them to compete with anyone and capture maximum business volume. they are always consulting with us in every business diversion movement for successful completions. exmedia has been a trailblazing Branding & an Advertisement company, driving brand success through innovation, creativity, and strategic excellence. With an illustrious history, we've honed our craft to deliver impactful campaigns that transcend conventional boundaries. From dynamic visuals to compelling narratives, our diverse expertise in advertising, design, and branding has fueled the growth of numerous clients. We're not just an agency but your partners in shaping brand legacies. With a deep understanding of market dynamics, consumer behavior, and emerging trends, exmedia is your compass to navigate the ever-evolving advertising landscape, ensuring your brand remains at the forefront of industry innovation.</p>
                </motion.div>
            </div>
        </section>
    )
}

export default About
