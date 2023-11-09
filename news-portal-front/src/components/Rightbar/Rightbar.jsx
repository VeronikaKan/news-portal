import React, { useEffect } from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import './Rightbar.css'
import moment from 'moment';
import { getWeather } from '../../redux/action';
import { useDispatch } from 'react-redux';

const Rightbar = () => {
    const news = useSelector(state => state.allNews)
    const dispatch = useDispatch()
    const weather = useSelector(state => state.wether)
    console.log(weather);
  useEffect(()=>{
    dispatch(getWeather())
  },[])
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