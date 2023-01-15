import React from 'react'
import logoOnline from '../assets/icon-online.svg'
import logoBudgeting from '../assets/icon-budgeting.svg'
import logoOnBording from '../assets/icon-onboarding.svg'
import logoApi from '../assets/icon-api.svg'
import '../styles/choose.css'


const Choose = () => {
  return (
    <div className='choose-container'>
      <div>
        <h2 className='text-3xl'>Why choose Easybank?</h2>
        <p className='mt-4 w-[550px]'>We leverage Open Banking to turn your bank account into your financial hub.
          Control your finances like never before.
        </p>
      </div>

      <div className='grid grid-cols-4 p-5 gap-6 mt-[50px] '>
        <div>
          <img src={logoOnline} />
          <h4 className='mt-6'>Online Banking</h4>
          <p className='mt-6'>Our modern web and mobile application allow your to keep
            track of your finances wherever you are in the world
          </p>
        </div>
        <div>
          <img src={logoBudgeting} />
          <h4 className='mt-6'>Simple Budgeting</h4>
          <p className='mt-6'>See exactly where your money goes each month. Recive 
            notifacions when you're close to hitting your limits.
          </p>
        </div>
        <div>
          <img src={logoOnBording} />
          <h4 className='mt-6'>Fast Onboarding</h4>
          <p className='mt-6'>We don't do branches, Open your account in minutes online and
            start taking of your finances right away
          </p>
        </div>
        <div>
          <img src={logoApi} />
          <h4 className='mt-6'>Open API</h4>
          <p className='mt-6'>Manage your savgings, investments, pension, and much more from
            one account. Tracking your money has never been easier.</p>
        </div>
      </div>
    </div>
  )
}

export default Choose
