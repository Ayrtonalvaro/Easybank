import React from 'react'
import Logo from '../assets/logo.svg'
import logoFacebook from '../assets/icon-facebook.svg'
import logoYoutube from '../assets/icon-youtube.svg'
import logoTwitter from '../assets/icon-twitter.svg'
import logoPinterest from '../assets/icon-pinterest.svg'
import logoIg from '../assets/icon-instagram.svg'
const Footer = () => {
  return (
    <div>
      <footer className='bg-slate-700 w-full'>
        <div className='grid grid-cols-4 items-center text-white'>
          <div className='ml-5 p-[40px]' >
            <img src={Logo}/>
            <ul className='mt-[50px] flex gap-5'>
              <li><a><img src={logoFacebook}/></a></li>
              <li><a><img src={logoYoutube} /></a></li>
              <li><a><img src={logoTwitter}/></a></li>
              <li><a><img src={logoPinterest}/></a></li>
              <li><a><img src={logoIg} /></a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a>About Us</a></li>
              <li><a>Contact</a></li>
              <li><a>Blog</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a>Careers</a></li>
              <li><a>Support</a></li>
              <li><a>Privacy Policy</a></li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <button className='bg-green-400 text-white rounded-full p-2 w-40 '>Request Invite</button>
            <p className='mt-5 text-slate-400'>Easybank. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
