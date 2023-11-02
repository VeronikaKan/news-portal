import React from 'react'
import './Latest.css'

const Latest = ({latestNews}) => {
  
  return (

     <section className='latest'>
    <div className='latest__wrapper'>
      {
        latestNews.map((el) =>(
    <div className='latest__img'>
    <img src='https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png'/>
    <span className='latest__title'>
{el.title}
    </span>
    </div>
))}
</div>
    </section>

  )
}

export default Latest