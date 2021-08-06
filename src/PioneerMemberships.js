import React, { useEffect, useState } from 'react'
import { Membership } from './components/Membership/Membership.jsx'
import Navigation from './components/Navigation.jsx'
import BlockIncome from './components/BlockIncome.jsx'
import BlockBenefit from './components/BlockBenefit.jsx'
import BlockRange from './components/BlockRange.jsx'
import BlockAfterUpgrade from './components/BlockAfterUpgrade.jsx'
import BlockQuestion from './components/BlockQuestion.jsx'
import BlockSubscribe from './components/BlockSubscribe.jsx'
import Top1 from './assets/images/memberships/Top1.jpg'
import './assets/scss/index.scss'

const PioneerMemberships = (props) => {
  const [scroll, setScroll] = useState(0)

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  const handleUpButton = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='memberships'>
      {scroll > 300 ? (
        <button onClick={handleUpButton} className='memberships__button-up'>
          <div className='arrow-down0'>
            <span className='arrow-down1'></span>
            <span className='arrow-down2'></span>
            <span className='arrow-down3'></span>
          </div>
          Up
        </button>
      ) : null}

      <div
        style={{
          background: `url(${Top1})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className='memberships__wrapper-nav'>
        <Navigation {...props} />
      </div>
      <div className='memberships__wrapper'>
        <Membership />
      </div>
      <div className='memberships__income'>
        <BlockIncome />
      </div>
      <div className='memberships__benefit'>
        <BlockBenefit />
      </div>
      <div className='memberships__range'>
        <BlockRange />
      </div>
      <div className='memberships__after-upgrade-wrapper'>
        <BlockAfterUpgrade />
      </div>
      <div className='memberships__question-wrapper'>
        <BlockQuestion />
      </div>
      <div className='memberships__subscribe-wrapper'>
        <BlockSubscribe />
      </div>
    </div>
  )
}
export default PioneerMemberships
