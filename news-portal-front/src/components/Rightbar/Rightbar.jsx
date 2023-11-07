import React, { useEffect } from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import './Rightbar.css'

const Rightbar = () => {
    const news = useSelector(state => state.allNews)
    console.log(news);
  return (

    <div className='rightbar'>
        <ul>
           {news.map((item) => (
<li className='rightbar__link'>{item.title}<p>{(item.date)}</p></li>

           ))} 
        </ul>
    </div>
  )
}

export default Rightbar