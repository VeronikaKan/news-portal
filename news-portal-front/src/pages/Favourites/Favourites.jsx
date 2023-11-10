import React, { useEffect } from 'react'
import { getNewsLikedByUser } from '../../redux/action'
import {useSelector} from 'react-redux'
import "./Favourites.css"
const Favourites = () => {
  // const likedNews = useSelector(state=> state.likedNews)

// useEffect(() => {
//   getNewsLikedByUser()
// },[])
  return (
    <div className='favourites'>
  
    </div>
  )
}

export default Favourites