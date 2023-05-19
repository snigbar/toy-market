import React from 'react'
import banner1 from '../../assets/carouselImg/banner1.jpg'
import banner2 from '../../assets/carouselImg/banner2.jpg'
import banner3 from '../../assets/carouselImg/banner3.jpg'

function Carousel() {



  return (
    <div className="carousel w-[90%] lg:w-3/5 h-[65vh] rounded-3xl">
        {/* slide 1 */}
    <div id="slide1" className="carousel-item relative w-full">
      <img src={banner1} className="w-full object-cover" />
    <div className="absolute w-3/5 h-full bg-gradient-to-r from-[#141414] to-[rgba(0,0,0,0)]">
        <div className='flex flex-col justify-center h-full items-start ms-24 w-full gap-4 text-white'>
        <h1 className="text-6xl tracking-[2px] font-bold">Exclusive Toys</h1>
        <p className="text-2xl font-semibold">Special Offer for New Customer</p>
        <button className="hover:bg-red-600 bg-[#FF1821] font-semibold text-white py-3 px-6 rounded-full text-lg">Discover More</button>
       
        </div>

    </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn rounded-2xl bg-cyan-500 fill-white hover:bg-[#FF1821] border-none">❮</a> 
        <a href="#slide2" className="btn rounded-2xl bg-cyan-500 fill-white hover:bg-[#FF1821] border-none">❯</a>
      </div>    
      </div> 

    {/* slide 2 */}
    <div id="slide2" className="carousel-item relative w-full">
      <img src={banner2} className="w-full object-cover" />
    <div className="absolute w-3/5 h-full bg-gradient-to-r from-[#141414] to-[rgba(0,0,0,0)]">
        <div className='flex flex-col justify-center h-full items-start ms-24 w-full gap-4 text-white'>
        <h1 className="text-6xl tracking-[2px] font-bold">Exclusive Toys</h1>
        <p className="text-2xl font-semibold">Special Offer for New Customer</p>
        <button className="hover:bg-red-600 bg-[#FF1821] font-semibold text-white py-3 px-6 rounded-full text-lg">Discover More</button>
       
        </div>

    </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn rounded-2xl bg-cyan-500 fill-white hover:bg-[#FF1821] border-none">❮</a> 
        <a href="#slide3" className="btn rounded-2xl bg-cyan-500 fill-white hover:bg-[#FF1821] border-none">❯</a>
      </div>    
      </div> 

    {/* slide-3 */}
    <div id="slide3" className="carousel-item relative w-full">
      <img src={banner3} className="w-full object-cover" />
    <div className="absolute w-3/5 h-full bg-gradient-to-r from-[#141414] to-[rgba(0,0,0,0)]">
        <div className='flex flex-col justify-center h-full items-start ms-24 w-full gap-4 text-white'>
        <h1 className="text-6xl tracking-[2px] font-bold">Exclusive Toys</h1>
        <p className="text-2xl font-semibold">Special Offer for New Customer</p>
        <button className="hover:bg-red-600 bg-[#FF1821] font-semibold text-white py-3 px-6 rounded-full text-lg">Discover More</button>
       
        </div>

    </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn rounded-2xl bg-cyan-500 fill-white hover:bg-[#FF1821] border-none">❮</a> 
        <a href="#slide1" className="btn rounded-2xl bg-cyan-500 fill-white hover:bg-[#FF1821] border-none">❯</a>
      </div>    
      </div> 
    
    </div>
    
  )
}

export default Carousel