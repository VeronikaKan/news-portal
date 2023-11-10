import React from 'react'
import './Latest.css'
import MiniCard from '../MiniCard/MiniCard'
const Latest = ({latestNews,miniCardNews}) => {
  
  return (

     <section className='latest'>
   <div className='latest__wrapper'>
    {miniCardNews.map((el) =>(
<div className='latest__column1'>
<div className='column1__img'>
  <img src={el.image}/>
</div>
<p className='column1__title'>
  {el.title}
</p>
<p className='column1__content truncate'>{el.content}<span>...</span></p>
</div>))}
<div className='latest__column2'>
<MiniCard latestNews = {latestNews}/>
</div>
   </div>
    </section>

  )
}

export default Latest