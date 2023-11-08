import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getNewsById } from '../../redux/action'
import "./Details.css"

const Details = () => {
    const {newsId} = useParams()
    console.log(45,useParams());
    const dispatch = useDispatch()
    const oneNews = useSelector(state => state.oneNews)
 console.log(oneNews);
    useEffect(() => {
        dispatch(getNewsById(newsId))
    },[newsId])
  return (
    <div className='details__wrapper'>
        <p className='details__title'>
            {oneNews.title}
        </p>
    <div>
    <img src={oneNews.image}/>
    </div>
        <p>{oneNews.content}</p>
    </div>
  )
}

export default Details