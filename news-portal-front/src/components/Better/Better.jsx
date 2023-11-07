import React from 'react'
import './Better.css'

const Better = ({betterNews}) => {
    console.log(222,betterNews);
    return (
<div>{betterNews.map((item) =>(
        <div className='breaking__wrapper'>
            
                <div className='breaking__img'>
                    <img src={item.image} />
                </div>
            <div className='breaking__left'>
                <div className='breaking__title'>{item.title}<p className='breaking__time'>{item.date}</p></div>
                
            </div>
            <div className='breaking__right'>
<p>{item.content}</p>         
   </div>
</div>))}
        </div>
    )
}

export default Better