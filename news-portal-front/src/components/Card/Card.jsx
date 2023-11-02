import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import defaultImage from '../../assets/news.png'
const Card = ({item}) => {
const cardImage = item.imag?item.image:defaultImage

  return (
    <div>
   
        <div className="max-w-2xl mx-auto my-5	 inWorld__card">
    
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <div className='home__img'>
            <img className="rounded-t-lg " src ={cardImage} alt="news"/>
        </div>
        <div className="p-5">
            <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white " >{item.title}</h5>
            </a>
            <p className= "font-normal text-gray-700 mb-3 dark:text-gray-400 home__desc"  >{item.content}</p>
            <NavLink to = "/details" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                Read more
                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </NavLink>
        </div>
    </div>
</div></div>
    )
}

export default Card