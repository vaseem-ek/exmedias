import React from 'react'
import Dash from './Dash'
import { TbMailFilled } from 'react-icons/tb'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaPinterest, FaYoutube } from 'react-icons/fa'
import { FaThreads, FaXTwitter } from 'react-icons/fa6'

function Footer() {
    return (
        <div>

            <Dash />
            <div className='py-10 bg-gray-200'>
                <div className='py-3  flex md:justify-around flex-wrap gap-5 px-5 lg:justify-around '>
                    <div className='flex gap-1 items-center'>
                        <TbMailFilled size={25} />
                        <p className='text-xl '>info@exmediad.in</p>
                    </div>
                    <div>
                        <p className='text-xl '>KERALA – UAE</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <FaPhone />
                        <p className='text-xl '> +919526123466</p>
                    </div>
                </div>
                <div className='flex justify-center px-5'>
                    <p className='lg:text-xl text-xs text-slate-900'>
                        We can shape Your brand story & identities With impact
                    </p>
                </div>
                <div className='flex py-6 px-5 justify-center gap-5'>
                    <a href="https://www.facebook.com/exmedia" >
                        <FaFacebook className='hover:text-blue-400 cursor-pointer hover:scale-110 transform' size={20} />
                    </a>
                    <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fexmedia1%2Fposts%2F%3FfeedView%3Dall">
                        <FaLinkedin className='hover:text-blue-600 cursor-pointer hover:scale-110 transform' size={20} />
                    </a>
                    <a href="https://x.com/i/flow/login?redirect_after_login=%2Fexmedia_1">
                        <FaXTwitter className='hover:text-green-400 cursor-pointer hover:scale-110 transform' size={20} />
                    </a>
                    <a href="https://in.pinterest.com/exmedia/">
                        <FaPinterest className='hover:text-yellow-400 cursor-pointer hover:scale-110 transform' size={20} />
                    </a>
                    <a href="https://www.youtube.com/channel/UC4tqUCDI3l10SZMwNlR1l9w">
                        <FaYoutube className='hover:text-red-700 cursor-pointer hover:scale-110 transform' size={20} />
                    </a>
                    <a href="https://www.threads.net/@exmedia_1">
                    <FaThreads className='hover:text-rose-600 cursor-pointer hover:scale-110 transform' size={20} />
                    </a>
                    <a href="https://www.instagram.com/exmedia_1/">
                    <FaInstagram className='hover:text-rose-700 cursor-pointer hover:scale-110 transform' size={20} />
                    </a>

                </div>
            </div>
            <div className='bg-gray-500 justify-center flex py-5 px-5'>
                <p className='lg:text-xl text-xs'>
                    © 2024 Exmedia. All Rights Reserved | Terms & Conditions | Privacy Policy
                </p>
            </div>
        </div>
    )
}

export default Footer
