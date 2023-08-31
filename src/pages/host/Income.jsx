import React from 'react'

export default function Income() {
  return (
    <div className='Income'>
      <div className='Income--data'>
        <h2>Income</h2>
        <p>
          Last <span>30 days</span>
        </p>
        <h1>$2,260</h1>
        <img src='/images/income.svg' />
      </div>
      <div className='Income--transactions'>
        <h3>Your transactions (3)</h3>
        <p>
          Last <span>30 days</span>
        </p>
        <div className='Income--transactions--container'>
          <div>
            <h2>$720</h2>
            <p>1/12/22</p>
          </div>
          <div>
            <h2>$560</h2>
            <p>10/11/22</p>
          </div>
          <div>
            <h2>$980</h2>
            <p>23/11/22</p>
          </div>
        </div>
      </div>
    </div>
  )
}
