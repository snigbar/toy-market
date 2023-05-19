import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'

const Header = () => {
  return (
    <div className='flex flex-col lg:flex-row h-max my-10 w-full justify-center mx-4 items-center gap-8 lg:gap-0 overflow-x-hidden'>
    <Carousel></Carousel>


    <div className='flex flex-col md:flex-row lg:flex-col gap-8 w-11/12 lg:w-2/5 justify-center items-center md:items-stretch lg:items-center'>

        <div className="card bg-[#f27149] text-neutral-content lg:h-56 w-10/12 flex items-center justify-center p-2 lg:p-0 py-4">
            <div className="flex flex-col justify-center h-[85%] w-[95%] gap-2 lg:gap-4 items-center text-center border-2 border-[#c04722] border-dashed rounded-2xl py-4">
                <h2 className="card-title font-bold text-3xl lg:text-5xl">Up to 50% Of</h2>
                <p className='text-xl lg:text-3xl'>On Selected Items</p>
                
                <button className="btn bg-white hover:bg-gray-200 text-zinc-950 font-semibold py-2 px-4 rounded-full text-lg border-none">Shop Now !</button>
            
            </div>
        </div>

        <div className="card bg-indigo-500 text-neutral-content lg:h-56 w-10/12 flex items-center justify-center p-2 lg:p-0 py-4">
            <div className="flex h-[85%] w-[95%] gap-2 lg:gap-4 items-center justify-around border-2 border-[#432192] border-dashed rounded-2xl py-4">
               <div>
                <h2 className="card-title font-bold text-3xl lg:text-5xl">5% OFF</h2>
                <p className='text-xl lg:text-3xl'>On Marvel Toys</p>
                </div> 
                <button className="btn bg-white hover:bg-gray-200 text-zinc-950 font-semibold py-2 px-4 rounded-full text-lg border-none">Checkout Now!</button>
            
            </div>
        </div>

    </div>
    </div>
  )
}

export default Header