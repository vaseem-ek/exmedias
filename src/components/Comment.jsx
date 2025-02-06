import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variant'

function Comment() {
    return (
        <div className='bg-rose-200 py-5 my-2'>
            <div className='px-3 md:px-20 lg:px-40 lg:my-5'>
                <h1 className='text-center pt-5 text-slate-500 text-xl md:text-3xl font-bold'>What The People Thinks <br /> About Us</h1>
            </div>
            <div className='flex justify-center mt-5 p-2 flex-wrap gap-4'>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className='w-[18rem]  rounded-lg bg-yellow-100 shadow-2xl mb-2'>
                    <div className='p-6'>
                        <div className='flex gap-3 items-center'>
                            <img src="https://images.bauerhosting.com/legacy/empire-images/articles/5b2b77c25d100c3005684646/scarlett-johansson-black-widow.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80" className='w-10 h-10 rounded-full' alt="" />
                            <p className='text-slate-600 font-bold'>Natasha Febin</p>
                        </div>
                        <p className='text-xs mt-2 text-slate-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ea aspernatur nam ex sapiente. Repellendus, perspiciatis repel</p>
                    </div>
                </motion.div>
                <motion.div 
                variants={fadeIn('up', 0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className='w-[18rem] rounded-lg bg-yellow-100 shadow-2xl mb-2'>
                    <div className='p-6'>
                        <div className='flex gap-3 items-center'>
                            <img src="https://preview.redd.it/whose-the-strongest-marvel-character-loki-can-defeat-v0-nyojt46ts2tc1.jpeg?auto=webp&s=9cf43602d46383f8df4c9feef6312c558c54c002" className='w-10 h-10 rounded-full' alt="" />
                            <p className='text-slate-600 font-bold'> Loki</p>
                        </div>
                        <p className='text-xs mt-2 text-slate-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ea aspernatur nam ex sapiente. Repellendus, perspiciatis repel</p>
                    </div>
                </motion.div>
                <motion.div
                variants={fadeIn('up', 0.8)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className='w-[18rem]  rounded-lg bg-yellow-100 shadow-2xl mb-2'>
                    <div className='p-6'>
                        <div className='flex gap-3 items-center'>
                            <img src="https://media.wired.com/photos/59270140f3e2356fd800b27f/191:100/w_1200,h_630,c_limit/CAHP.jpg" className='w-10 h-10 rounded-full' alt="" />
                            <p className='text-slate-600 font-bold'>Captain America</p>
                        </div>
                        <p className='text-xs mt-2 text-slate-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ea aspernatur nam ex sapiente. Repellendus, perspiciatis repel</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Comment
