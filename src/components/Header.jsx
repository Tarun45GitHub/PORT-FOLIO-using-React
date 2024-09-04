import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { FaTimes } from 'react-icons/fa';
import logo from '../assets/Tarun_logo.jpg'



function Header() {
    const [click,Setclick]=useState(false);
    const handelClick=()=>Setclick(!click);
    return (
        <div className='h-[80px] w-full py-5 px-5 bg-[#0a192f]	text-gray-300' >
            <nav className='flex justify-between align-middle'>
                <div>
                    <Link to="/">
                  <img src={logo} alt="IMG" className='h-10' />
                    </Link>
                </div>
                <div>
                    <ul className={click?`hidden`:`flex  flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-04`}>
                        <li>
                            <NavLink to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/project">Project</NavLink>
                        </li>
                        <li>
                            <NavLink to="/skills">Skills</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div onClick={handelClick}>
                   {click?(<FaBars/>):(<FaTimes/>)}
                </div>
            </nav>
          
        </div>
    
    )
}

export default Header
