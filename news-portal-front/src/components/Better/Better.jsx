import React from 'react'
import './Better.css'
import moment from 'moment';
import { Link } from 'react-router-dom';


const Better = ({ betterNews }) => {
const better = betterNews.map((el) => {
return el
}) 

    return (
        <div className='better'>
            <div className='home__wrapper mx-auto max-w-screen-xl'>
                <div className='home__wrapper1 home__background'style={{ backgroundImage: `url(${better[0]?.image})` }}>
                   <p>
                    {better[0]?.title}
                    </p>
                </div>
                <div className='home__wrapper2 home__background' style={{ backgroundImage: `url(${better[1]?.image})` }}>
               <p>
                {better[1]?.title}
                </p>
                </div>
                <div className='home__wrapper3 home__background' style={{ backgroundImage: `url(${better[2]?.image})` }}>
                <p>
                {better[2]?.title}
                </p>
                </div>
                <div className='home__wrapper4 home__background'style={{ backgroundImage: `url(${better[3]?.image})` }}>
                <p>
                {better[3]?.title}
                </p>
                </div>
            </div>
        </div>
    )
}

export default Better