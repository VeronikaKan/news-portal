import React, { useEffect } from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
import Latest from '../../components/Latest/Latest'
import Card from '../../components/Card/Card'
import { getNews } from '../../redux/action'
import { useDispatch } from 'react-redux'
const Home = () => {
  const dispatch = useDispatch()
 useEffect(() =>{
  dispatch(getNews())
 },[])
  return (
<>


<section className='breaking'>
<div className='container'>
  <div className='breaking__wrapper'>
<div className='breaking__left'>
<div className='breaking__img'>
<img src='https://data.kaktus.media/image/big/2023-11-01_12-37-54_989840.jpg'/>
</div>
<div className='breaking__title'>Loremdfdfdfdfd fdfdfd dfdfdfd dfdf</div>
<p className='breaking__time'>01.11.2023</p>
</div>
<div className='breaking__right'>
<p><span>title</span> description dkfjsdlkfjdjflkjfldfjlsjdfkjsldkfj</p>
</div>
</div>
<Latest/>
<div className='card__wrapper'>
<Card/>
</div>
</div>
</section>
</>
  )
}

export default Home