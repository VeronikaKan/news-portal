import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getWeather } from '../../redux/action'

const Rightbar = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getWeather())
    },[])
  return (
    <div>Rightbar</div>
  )
}

export default Rightbar