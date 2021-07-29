import React from 'react'
import icon from '../assets/images/memberships/icon.svg'
import girl from '../assets/images/memberships/girl.png'
import cup from '../assets/images/memberships/cup.svg'
import finger from '../assets/images/memberships/finger.svg'

const Navigation = () => {
  return (
    <div className='memberships__nav-inner'>
      <section className='memberships__nav'>
        <img src={icon} alt='' className='memberships__icon' />
        <button className='memberships__back'>
          <span className='memberships__arrow-inner'>
            <span className='memberships__arrow'></span>
          </span>
          <span>Back to dashboard</span>
        </button>
        <button className='memberships__back-visble'>
          <span className='memberships__arrow-inner'>
            <span className='memberships__arrow'></span>
          </span>
          <span>Back</span>
        </button>
      </section>
      <section className='memberships__inner-info'>
        <div className='memberships__block-title'>
          <h2 className='memberships__title'>You can have it all.</h2>
          <h4 className='memberships__subtitle'>
            Become a premium Pioneer Member.
          </h4>
          <button className='memberships__btn-more'>Learn more</button>
        </div>
        <div className='memberships__block-information'>
          <div className='memberships__block-sum'>
            <img className='memberships__cup-img' src={cup} alt='icon cup' />
            <div className='memberships__box'>
              <div className='memberships__cup-title'>Your earn</div>
              <div className='memberships__cup-sum'>+ $1000</div>
            </div>
          </div>
          <div className='memberships__block-img'>
            <img src={girl} alt='' />
          </div>
          <div className='memberships__block-name'>
            <img src={finger} alt='' />
            <div className='memberships__finger-block'>
              <div className='memberships__finger-title'>You’ve referred</div>
              <div className='memberships__finger-name'>Kristin Lane</div>
            </div>
            <div className='memberships__finger-other'>and 99 other</div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Navigation
