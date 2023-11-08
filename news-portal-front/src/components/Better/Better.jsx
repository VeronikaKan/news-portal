import React from 'react'
import './Better.css'
import moment from 'moment';


const Better = ({betterNews}) => {
 
    return (
<div>{betterNews.map((item) =>(
    
        <div className='breaking__wrapper'>
            
                <div className='breaking__img'>
                    <img src={item.image} />
                </div>
            <div className='breaking__left'>
                <div className='breaking__title'>{item.title}<p className='breaking__time'>{moment(item.date).format("LLLL")}</p></div>
                
            </div>
            <div className='breaking__right'>
<p>{item.content}</p>         
   </div>
</div>))}
        </div>
    )
}

export default Better