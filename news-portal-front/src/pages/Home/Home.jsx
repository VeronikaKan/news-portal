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
  const allNews = useSelector(state => state.allNews)
  const news = useSelector(state => state.selected)
  const like = useSelector(state => state.likeCount)

  const latestNews = allNews.slice(-2)
  const betterNews = allNews.slice(1,2)
 useEffect(() =>{
  dispatch(getNews())
 },[token,like])

  return (
<>


<section className='breaking'>
<div className='container'>
<Better betterNews= {betterNews}/>

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