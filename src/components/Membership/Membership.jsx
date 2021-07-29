import React from 'react'
import { Basic } from './Basic.jsx'
import { Bronze } from './Bronze.jsx'
import { Gold } from './Gold.jsx'
import { Silver } from './Silver.jsx'

export const Membership = () => {
  return (
    <section className='memberships__block-plans'>
      <h2 className='memberships__plans-title'>Membership Plans</h2>
      <p className='memberships__plans-subtitle'>
        Join the many thousands of people who have upgraded to become premium
        Pioneer Members. It’s the fastest way to earning and withdrawing
        thousands in regular income from Pioneer Membership.
      </p>

      <div className='memberships__block-card'>
        <Basic />
        <Bronze />
        <Silver />
        <Gold />
      </div>
    </section>
  )
}
