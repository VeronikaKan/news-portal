import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../components/Card/Card'
import { useParams } from 'react-router-dom'

const OneCategory = () => {
    const {id} = useParams
    const news = useSelector(state => state.selected)
    console.log(news);
  return (
    <div>{news.map((item) =>(
        <Card key={item.title} item = {item} id = {id}/>))}
        </div>
  )
}

export default OneCategory