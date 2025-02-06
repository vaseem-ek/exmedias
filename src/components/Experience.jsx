import React from 'react'
import Dash from './Dash'
import { motion } from 'framer-motion'
import { fadeIn } from '../variant'

function Experience() {
    return (
        <div>
            <Dash />
            <div className='bg-rose-100'>
                <div className='w-full md:h-[300px] px-2 py-6 gap-3 md:py-12 grid grid-cols-1 md:grid-cols-4'>
                    <motion.div
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='md:border-r-2 flex justify-center flex-col items-center'>
                        <h3 className='md:text-6xl text-xl font-bold'>23</h3>
                        <p>Years of Experience</p>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }} className='md:border-r-2 flex justify-center flex-col items-center'>
                        <h3 className='md:text-6xl text-xl font-bold'>1989</h3>
                        <p>Success project</p>
                    </motion.div>
                    <motion.div variants={fadeIn('up', 0.8)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }} className='md:border-r-2 flex justify-center flex-col items-center'>
                        <h3 className='md:text-6xl text-xl font-bold'>51</h3>
                        <p>Active project</p>
                    </motion.div>
                    <motion.div variants={fadeIn('up', 1)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }} className=' flex justify-center flex-col items-center'>
                        <h3 className='md:text-6xl text-xl font-bold'>236</h3>
                        <p>Happy Customers</p>
                    </motion.div>

                </div>
            </div>
        </div>

    )
}

export default Experience
