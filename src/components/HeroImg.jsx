import React from 'react'

function HeroImg({heading='',text='',bgURL=''}) {
    return (
       <div className='w-full h-screen'>
        <div className={`w-full h-4/5 flex flex-col justify-center items-center bg-[url(${bgURL})] bg-cover`}>
            <h1 className='text-3xl text-black '>{heading}</h1>
            <p>{text}</p>
        </div>

       </div>
    )
}

export default HeroImg
