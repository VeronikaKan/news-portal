import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Card.css'
import { getNewsById } from '../../redux/action'
import { addLike } from '../../redux/action'
const Card = ({ item }) => {
    const dispatch = useDispatch()
    // const cardImage = item.imag?item.image:defaultImage
    const token = useSelector(state => state.token)


    const handleClick = () => {
        dispatch(addLike(item.news_id))
        dispatch(getNewsById(item.news_id))

    }


    return (




        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <div className='card__img'>
                <img className="rounded-t-lg " src={item.image} alt="news" />
            </div>
            <div className="p-5">
                <a href="#">
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white " >{item.title}</h5>
                </a>
                {/* <p className= "font-normal text-gray-700 mb-3 dark:text-gray-400 home__desc"  >{item.content}</p> */}
                {token ? <div className='card__icons'>
                    <div onClick={() => handleClick(item.news_id)} className='card__icon'>
                        <i class="fa-regular fa-heart"></i>
                        <p>{item.likes_count}</p>
                    </div>
                    <div className='card__icon'>
                        <i class="fa-solid fa-eye"></i>
                        <p>{item.views_count}</p>
                    </div>
                </div> : <div></div>
                }
                <Link to={`/details/${item.news_id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                    Читать больше
                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>
        </div>

        // <button className='card__btn'> 
        //     X
        // </button>


    )
}

export default Card