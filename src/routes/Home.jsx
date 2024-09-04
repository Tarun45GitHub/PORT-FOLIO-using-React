import React from 'react'
import intro from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
        <div className='max-h-full max-w-full'>
            <div className='h-full w-full relative '>
                <img src={intro} alt="IMG" className='w-fit h-full bg-cover bg-center object-cover' />
            </div>
            <div className='absolute -translate-y-1/2 -translate-x-1/2	top-1/2 left-1/2 text-center'>
                <p>Hi,My Name is</p>
                <h1>TARUN DALBERA</h1>
                <div>
                    <Link to='/project'>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500      hover:border-transparent rounded">
                         Project
                    </button>
                    </Link>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500      hover:border-transparent rounded">
                         Resume
                    </button>
                </div>

            </div>
        </div>
        </>
    )
}

export default Home
