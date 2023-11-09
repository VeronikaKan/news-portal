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
    <div className='details__img'>
    <img src={oneNews.image}/>
    </div>
        <p className='details__content'>{oneNews.content}</p>
        <div className='details__icon'>
        <span>Просмотров</span>
                        <i class="fa-solid fa-eye"></i>
                        <p>{oneNews.views_count}
                       </p>
                    </div>
    </div>
  )
}

export default Details