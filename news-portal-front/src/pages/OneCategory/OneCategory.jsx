import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Card/Card'
import { useParams } from 'react-router-dom'
import { selectCategory } from '../../redux/action'
import "./OneCategory.css"
import { addLike } from '../../redux/action'

const OneCategory = () => {
  useEffect(() =>{
    addLike()
  },[])
    const {id} = useParams()
    const dispatch = useDispatch()
    const news = useSelector(state => state.selected)
  useEffect(() => {
    dispatch(selectCategory(id))
  },[id])

  
  return (
    <div className='categories__wrapper'>
        {news.map((item) =>(
        <Card key={item.title} item = {item} id = {item.id}/>))}
        
        </div>
  )
}

export default OneCategory