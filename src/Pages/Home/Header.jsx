import React, { useEffect } from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div className='flex flex-col lg:flex-row h-max my-10 w-full justify-center mx-4 items-center gap-8 lg:gap-0 overflow-x-hidden'>
    <Carousel></Carousel>


    <div className='flex flex-col md:flex-row lg:flex-col gap-8 w-11/12 lg:w-2/5 justify-center items-center md:items-stretch lg:items-center' >

        <div className="card bg-[#f27149] text-neutral-content lg:h-48 w-10/12 flex items-center justify-center p-2 lg:p-0 py-4">
            <div className="flex flex-col justify-center flex-wrap lg:flex-nowrap h-[92%] w-[95%] gap-2 lg:gap-4 items-center text-center border-2 border-[#c04722] border-dashed rounded-2xl py-4">
                <h2 className="card-title font-bold text-xl lg:text-3xl">Up to 50% Of</h2>
                <p className='text-lg lg:text-xl'>On Selected Items</p>
                
                <button className="btn bg-white hover:bg-gray-200 text-zinc-950 font-semibold py-2 px-4 rounded-full border-none">Shop Now !</button>
            
            </div>
        </div>

        <div className="card bg-indigo-500 text-neutral-content lg:h-48 w-10/12 flex items-center justify-center p-2 lg:p-0 py-4" data-aos="fade-left">
            <div className="flex h-[92%] w-[95%] gap-2 flex-wrap lg:gap-4 items-center justify-around border-2 border-[#432192] border-dashed rounded-2xl py-4">
               <div>
                <h2 className="card-title font-bold text-xl lg:text-3xl">5% OFF</h2>
                <p className='text-lg lg:text-xl'>On Marvel Toys</p>
                </div> 
                <button className="btn bg-white hover:bg-gray-200 text-zinc-950 font-semibold py-2 px-4 rounded-full border-none">Checkout Now!</button>
            
            </div>
        </div>

    </div>
    </div>
  )
}

export default Header