import React from 'react'
import sug from '../../assets/images/memberships/sug.png'
import checkTrue from '../../assets/images/memberships/check-true.svg'
import checkLight from '../../assets/images/memberships/check-light.svg'
import classNames from 'classnames'

export const Gold = () => {
  /*   const dispatch = useDispatch()
  const activeForm = useSelector((state) => state.pioneerReducer.activeUpdrade)
  const false = useSelector((state) => state.pioneerReducer.false)
 */
  const buttonActivation = ({ target: { name } }) => {
    console.log(name)
  }

  return (
    <div
      className={classNames('memberships__card', {
        'memberships__card-visible': false,
      })}>
      <img
        className='memberships__card-suggested'
        src={sug}
        alt='img suggested'
      />
      <h3
        className={classNames('memberships__card-title', {
          'memberships__card-title-visible': false,
        })}>
        Gold
      </h3>
      <div
        className={classNames('memberships__card-subtitle', {
          'memberships__card-subtitle-visible': false,
        })}>
        <span>$399</span>
        <sub className='memberships__card-subtitle-sub'>/ yr</sub>
      </div>
      <div className='memberships__card-subtitle-gray'>Billed annually</div>
      <ul className='memberships__card-list'>
        <li className='memberships__card-item'>
          <img
            className='memberships__card-item-img'
            src={false ? checkTrue : checkLight}
            alt=''
          />
          <div>
            Withdrawal threshold -{' '}
            <span
              className={
                !false
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }>
              $100
            </span>
          </div>
        </li>
        <li className='memberships__card-item'>
          <img
            className='memberships__card-item-img'
            src={false ? checkTrue : checkLight}
            alt=''
          />
          <div>
            Rentpayments rebates -{' '}
            <span
              className={
                !false
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }>
              25%
            </span>
          </div>
        </li>
        <li className='memberships__card-item'>
          <img
            className='memberships__card-item-img'
            src={false ? checkTrue : checkLight}
            alt=''
          />
          <div>
            For each Referral you get{' '}
            <strong
              className={
                !false
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }>
              $10
            </strong>
            . <br />
            Your referred contacts get{' '}
            <strong
              className={
                !false
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }>
              $7
            </strong>
            .
            <br />
            Earn Unlimited
          </div>
        </li>
        <li className='memberships__card-item'>
          <img
            className='memberships__card-item-img'
            src={false ? checkTrue : checkLight}
            alt=''
          />
          <div>
            DIVITS reward for 1000 hours
            <br />+ Added Bonus{' '}
            <strong
              className={
                !false
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }>
              100%
            </strong>
          </div>
        </li>
        <li className='memberships__card-item'>
          <img
            className='memberships__card-item-img'
            src={false ? checkTrue : checkLight}
            alt=''
          />
          <div>
            <strong
              className={
                !false
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }>
              Merge
            </strong>{' '}
            all earnings to <br /> withdraw
          </div>
        </li>
        <li className='memberships__card-item'>
          <img
            className='memberships__card-item-img'
            src={false ? checkTrue : checkLight}
            alt=''
          />
          <div>
            Withdrawal fee -{' '}
            <strong
              className={
                !false
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }>
              0%
            </strong>
          </div>
        </li>
        <li className='memberships__card-item'>
          <img
            className='memberships__card-item-img'
            src={false ? checkTrue : checkLight}
            alt=''
          />
          <div>
            <strong
              className={
                !false
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }>
              Redeem Rewards
            </strong>{' '}
            - To <br />
            Cash, $DIVITS Token, Bitcoin,
            <br /> ETH, SOL
          </div>
        </li>
        <li className='memberships__card-item'>
          <img
            className='memberships__card-item-img'
            src={false ? checkTrue : checkLight}
            alt=''
          />
          <div>
            <strong
              className={
                !false
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }>
              $DIVITS Token
            </strong>{' '}
            - Earn,
            <br /> Exchange, Trade
          </div>
        </li>
        <li className='memberships__card-item'>
          <img
            className='memberships__card-item-img'
            src={false ? checkTrue : checkLight}
            alt=''
          />
          <div>
            <strong
              className={
                !false
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }>
              Cryptocurrencies
            </strong>{' '}
            -<br /> Convert to Crypto
          </div>
        </li>
      </ul>
      <button
        disabled={false}
        onClick={(event) => {
          buttonActivation(event)
        }}
        name='Gold'
        className='memberships__card-btn'>
        {false ? 'Current plan' : 'Upgrade plan'}
      </button>
    </div>
  )
}
