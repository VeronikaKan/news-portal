import React, { useEffect,useState } from 'react'
import './Home.css'
import Latest from '../../components/Latest/Latest'
import Card from '../../components/Card/Card'
import { getNews } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import Better from '../../components/Better/Better'

import { getWeather } from '../../redux/action'
// import { getNewsLikedByUser } from '../../redux/action'

const Home = () => {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const allNews = useSelector(state => state.allNews)
  const news = useSelector(state => state.selected)
  const like = useSelector(state => state.likeCount)
  // const [token,setToken] = useState({})

  const latestNews = allNews.slice(-5)
  const betterNews = allNews.slice(1,5)
  const miniCardNews = allNews.slice(1,2)
 useEffect(() =>{
  dispatch(getNews())

// dispatch(getNewsLikedByUser())
 },[token,like])


  return (
<>


<section className='breaking'>
<div className='container'>
<Better betterNews= {betterNews}/>

  <Latest latestNews= {latestNews} miniCardNews = {miniCardNews} />
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