import React from 'react'

export default function Reviews() {
  return (
    <div className='Reviews'>
      <div className='Reviews--data'>
        <h2>Your reviews</h2>
        <p>
          Last <span>30 days</span>
        </p>
        <img src='/images/reviews.svg' />
      </div>
      <div className='Reviews--comments--container'>
        <h3>Reviews (2)</h3>
        <div className='Reviews--comments'>
          <div>
            <img src='/images/star.svg' />
            <img src='/images/star.svg' />
            <img src='/images/star.svg' />
            <img src='/images/star.svg' />
            <img src='/images/star.svg' />
          </div>
          <h4>
            Elliot <span>December 1, 2022</span>
          </h4>
          <p>The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!</p>
        </div>
        <div className='Reviews--comments'>
          <div>
            <img src='/images/star.svg' />
            <img src='/images/star.svg' />
            <img src='/images/star.svg' />
            <img src='/images/star.svg' />
            <img src='/images/star.svg' />
          </div>
          <h4>
            Sandy <span>November 23, 2022</span>
          </h4>
          <p>This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!</p>
        </div>
      </div>
    </div>
  )
}
