import React, { useEffect } from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import './Rightbar.css'
import moment from 'moment';

const Rightbar = () => {
    const news = useSelector(state => state.allNews)
  const rightBarNews = news.slice(0,6)
  return (

    <div className='rightbar'>
        <ul>
           {rightBarNews.map((item) => (
<li className='rightbar__link'>{item.title}<p>{moment(item.date).format("LLLL")}</p></li>

           ))} 
        </ul>
    </div>
  )
}

export default Rightbar