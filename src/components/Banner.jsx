import React from 'react'
import img from '../assets/image-mockups.png'
import '../styles/banner.css'
const Banner = () => {
  return (
    <div className='static mt-[100px] '>
      <div className='grid grid-cols-2 '>
        <div className='w-[450px]'>
          <h1 className='text-5xl'>Next generation digital banking</h1>
          <p className='mt-5 w-[400px] text-slate-400'>Take your financial life online. Your Easybank account will be a one-stop for spending, saving,budgeting,investing, and much more</p>
          <button className='mt-10 bg-green-400 text-white rounded-full p-2'>Request Invite</button>
        </div>
        <div className='img-bg '>
          <img src={img} width="500px"className='ml-[100px]'   alt="_blank" />
        </div>
      </div>
    </div>
  )
}

export default Banner
