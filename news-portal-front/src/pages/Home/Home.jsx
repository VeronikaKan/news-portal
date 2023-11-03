import React, { useEffect } from 'react'
import './Home.css'
import Latest from '../../components/Latest/Latest'
import Card from '../../components/Card/Card'
import { getNews } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import Better from '../../components/Better/Better'
const Home = () => {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const news = useSelector(state => state.allNews)
  const latestNews = news.slice(-2)
 useEffect(() =>{
  dispatch(getNews())
 },[token])
  return (
<>


<section className='breaking'>
<div className='container'>
<Better/>

  <Latest latestNews= {latestNews} />
<div className='card__wrapper'>
{news.map((item,i) =>
(<Card key={item.title} item = {item}/>))}
</div>
</div>
</section>
</>
  )
}

export default Home