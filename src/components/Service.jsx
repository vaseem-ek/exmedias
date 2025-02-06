import React from 'react'
import Dash from './Dash'
import { FaPhoneAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeIn } from '../variant'

function Service() {
    return (
        <div className='px-3 md:px-20 lg:px-40 my-20'>
            <Dash />
            <section id='service' className=''>
                <div className='grid grid-cols-1 px-5 md:gap-6 lg:px-10 md:grid-cols-3'>
                    <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <h1 className='text-xl md:text-2xl font-bold my-2 '>Branding strategies</h1>
                        <p className='text-slate-600 text-justify'>Identities come to life, our expertise lies in shaping brands that resonate deeply and endure. With a keen understanding of market dynamics, we craft strategic brand identities that leave lasting imprints.</p>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                    >                        <h1 className='text-xl md:text-2xl font-bold my-2 '>Product photography/ video
                        </h1>
                        <p className='text-slate-600 text-justify'>We Craft Captivating Visuals, In Photography or Videography, We Transform Concepts Into Breathtaking Realities That Leave Lasting Impressions & Deliver each frame and note with excellence.</p>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('right', 0.8)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                    >                        <h1 className='text-xl md:text-2xl font-bold my-2 '>Al Web, Mobile App
                        </h1>
                        <p className='text-slate-600 text-justify'>Delivering services harness the power of AI to deliver customized, efficient, and user-friendly digital solutions, which will help the rapid growth of businesses and operational productivity with transformative technology</p>
                    </motion.div>

                </div>
                <div className='grid grid-cols-1 my-4 gap-2 md:gap-5 lg:gap-12 px-5 md:px-10 md:my-10 lg:my-16 md:grid-cols-2'>
                    <motion.div
                        variants={fadeIn('right', 0.4)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}

                        className='flex flex-col justify-center'>
                        <h1 className='text-xl md:text-3xl lg:text-4xl font-bold my-2  '>How We Help You For Brand Positioning & Empower the Business </h1>
                        <p className='text-slate-500 my-2 md:my-5 text-justify'>!!Unlock untapped potential and accelerate business with tailored strategies, Dominate the market and leave competitors in the dust !!</p>
                        <div className='md:mb-10 mb-5 flex gap-2 items-center '>
                            <FaPhoneAlt size={30} className='bg-black rounded-full text-white p-2 shadow-2xl shadow--400' />
                            <p className='md:text-3xl text-xl font-bold'>+919526123466</p>
                        </div>
                        <div className='my-3'>
                            <button className='py-2 px-3 bg-black hover:bg-white hover:text-black border cursor-pointer text-white '>
                                GET FREE DEMO
                            </button>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.4)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <img src="https://m.media-amazon.com/images/I/41TLysLjCPL._AC_SY350_QL15_.jpg" alt="" className='w-full object-cover rounded-bl-[15vw] md:rounded-bl-[10vw] rounded-tr-[20vw] md:rounded-tr-[10vw] ' />
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Service
