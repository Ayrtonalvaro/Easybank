import React from 'react'
import imgMoney from '../assets/image-currency.jpg'
import imgRestaurant from '../assets/image-restaurant.jpg'
import imgPlane from '../assets/image-plane.jpg'
import imgConfetti from '../assets/image-confetti.jpg'

const Articles = () => {
  return (
    <div className='mt-[100px]'>
      <h2 className='text-3xl'>Latest Articles</h2>
      <div className='grid grid-cols-4 gap-6 mt-[30px]'>
        <div className='card'>
          <img src={imgMoney} className="rounded-md w-[330px]" />
          <div className='p-5'>
            <p className='text-slate-400'>By Claire Robinson</p>
            <p className='mt-4 text-2xl'><a href='#' className='text-black hover:text-green-500'>Recive money in any currency with no fees</a></p>
            <p className='mt-4 text-slate-400'>The world is getting smaller and we're becoming more mobile.So
              why should you be forced to only recive money in a single...
            </p>
          </div>
        </div>
        <div className='card'>
          <img src={imgRestaurant} className="rounded-md" />
          <div className='p-5'>
            <p className='text-slate-400'>By Wilson Hutton</p>
            <p className='mt-4 text-2xl'><a href='#' className='text-black hover:text-green-500'>Treat yourself without worrying about money</a></p>
            <p className='mt-4 text-slate-400'>Our simple budgeting feature allows you to separte out yourspending and set realistic limits each
              month. That means you...
            </p>
          </div>
        </div>
        <div className='card'>
          <img src={imgPlane} className="rounded-md" />
          <div className='p-5'>
            <p className='text-slate-400'>By Wilson Hutton</p>
            <p className='mt-4 text-2xl '><a href='#' className='text-black hover:text-green-500'>Take your Easybank card wherever you go</a></p>
            <p className='mt-4 text-slate-400'>We want you to enjoy your travels. This is why we don't charge any
              fees on pourchases while you're abroad. We'll even show you...
            </p>
          </div>
        </div>
        <div className='card'>
          <img src={imgConfetti} className="rounded-md" />
          <div className='p-5'>
            <p className='text-slate-400'>By Claire Robinson</p>
            <p className='mt-4 text-2xl'><a className='text-black hover:text-green-500' href='#'>Our invete-only Beta accounts are now live!</a></p>
            <p className='mt-4 text-slate-400'>After a lot of hard work by the whole team, we're excited to launch
              our closed beta. It's easy to request an invite through the site...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles
