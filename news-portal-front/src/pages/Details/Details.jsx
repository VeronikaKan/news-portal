import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getNewsById } from '../../redux/action'

const Details = () => {
    const {newsId} = useParams()
    const dispatch = useDispatch()
    const oneNews = useSelector(state => state.oneNews)
 console.log(oneNews);
    useEffect(() => {
        dispatch(getNewsById(newsId))
    },[newsId])
  return (
    <div>
        <p>
            {oneNews.title}
        </p>
        <img src={oneNews.image}/>
    </div>
  )
}

export default Details