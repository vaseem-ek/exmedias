import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variant'

function Deliverables() {
    return (
        <section id='deliverable' className='px-3 md:h-[80vh] md:px-20 lg:px-40 my-20'>
            <h1 className='text-center font-bold mb-2  md:text-4xl text-xl'>Our Deliverables</h1>
            <p className='text-center mb-6 text-slate-400'>Best solutions & ideas for Your business. Elevate your impacts & connect brands with customers.</p>
            <div className='flex justify-center md:gap-6 gap-2 px-5 md:px-10  flex-wrap'>
                <div className=''>
                    <motion.div variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className="duration-500 overflow-hidden rounded-tl-[4vw] ">
                        <img
                            src="https://scrumdigital.com/blog/wp-content/uploads/2024/02/Impact-of-AI-and-ML-on-Transforming-Mobile-Application-Development-1.png"
                            alt="Mysterious Light Swirls Motion Graphics"
                            className="h-[200px] w-[200px] object-cover cursor-pointer  hover:scale-105 transition-transform"
                        />
                    </motion.div>
                    <h1 className='font-bold text-yellow-400 md:text-xl'>DIGITAL MARKETING</h1>
                </div>
                <motion.div
                    variants={fadeIn('left', 0.4)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                >

                    <div className="duration-500 overflow-hidden rounded-tr-[4vw] ">
                        <img
                            src="https://m.media-amazon.com/images/I/71v4HfZyLJL._AC_UF1000,1000_QL80_.jpg"
                            alt="Mysterious Light Swirls Motion Graphics"
                            className="h-[200px] w-[200px] object-cover cursor-pointer  hover:scale-105 transition-transform"
                        />
                    </div>
                    <h1 className='font-bold text-yellow-400 md:text-xl'>BRANDING</h1>

                </motion.div>
            </div>
            <div className='flex justify-center gap-2 md:gap-6 px-5 md:px-10  flex-wrap'>
                <motion.div 
                 variants={fadeIn('right', 0.6)}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.7 }}
                className=''>
                    <div className="duration-500 overflow-hidden rounded-bl-[4vw] ">
                        <img
                            src="https://designtemplate.tech/images/Mysterious%20Light%20Swirls%20Motion%20Graphics-HD.webp"

                            alt="Mysterious Light Swirls Motion Graphics"
                            className="h-[200px] w-[200px] object-cover cursor-pointer  hover:scale-105 transition-transform"
                        />
                    </div>
                    <h1 className='font-bold text-yellow-400 md:text-xl'>AI WEB & MOBILE</h1>
                </motion.div>
                <motion.div  variants={fadeIn('left', 0.8)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}>

                    <div className="duration-500 overflow-hidden rounded-br-[4vw] ">
                        <img
                            src="https://m.media-amazon.com/images/I/61aEtinRrrL._AC_UF894,1000_QL80_.jpg"
                            alt="Mysterious Light Swirls Motion Graphics"
                            className="h-[200px] w-[200px] object-cover cursor-pointer  hover:scale-105 transition-transform"
                        />
                    </div>
                    <h1 className='font-bold text-yellow-400 md:text-xl'>SATELLIFE MEDIA</h1>

                </motion.div>
            </div>



        </section>
    )
}

export default Deliverables
