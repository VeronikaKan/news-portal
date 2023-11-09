import React from 'react'
import moment from 'moment'
import "./MiniCard.css"

const MiniCard = ({latestNews}) => {
  return (

        <div className='mini-card__wrapper'>
            { latestNews.map((el) =>(
                <div className='mini-card'>
<div className='mini-card__img'>
    <img src={el.image}/>
</div>
<div className='mini-card__info'>
<p className='mini-card__date'>
{moment(el.date).format("LLLL")}
</p>
<p className='mini-card__content'>
{el.title}
</p>
</div>
</div>))}
        </div>
  
  )
}

export default MiniCard