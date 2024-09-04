import React from 'react'
import { FaHome } from 'react-icons/fa'
import { FaPhoneAlt } from "react-icons/fa";
import { LuCopyright } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";


function Footer() {
    return (
        <>
       <div className=' h-full w-full  px-20 bg-[#0a192f] text-gray-300' >
        <div id='top' className='py-10 flex justify-around flex-wrap'>
            <div id='left'>
                <div className=' flex '>
                     <div className='p-5'>
                        <FaHome/>
                    </div>
                    <div>
                        <p>paschim medinipur </p>
                        <p>West Bengal ,India</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='p-5'>
                    <IoLocationOutline />
                    </div>
                    <div>
                        <p>Jalpaiguri </p>
                        <p>West Bengal ,India</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='px-5 py-2'>
                    <FaPhoneAlt />
                    </div>
                    <div>
                        <p>+91 9832769906</p>
                    </div>
                </div>
            </div>
            <div id='right' className='w-1/3'>
                <div>
                    <h2 className='text-center'>About me</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat ea doloribus incidunt ducimus quasi accusantium, porro accusamus deleniti veniam aut saepe nisi laboriosam perferendis necessitatibus magnam quis quae sunt possimus ullam id est in nihil modi? Repudiandae, nostrum harum?</p>
                    
                </div>
                
            </div>
        </div>
        <div id='buttom'  >
           <div className=' h-10 w-full flex  items-center  justify-center	'>
           <p>Designed by </p>
           <div className='p-2'><LuCopyright /></div>
           <p>T@run45</p>

           </div>
        </div>
       </div>
        </>
    )
}

export default Footer
