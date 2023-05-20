import React from 'react'
import Slider from 'react-slick';
import img1 from '../../assets/toys-from/amazon.png'
import img2 from '../../assets/toys-from/dc.png'
import img3 from '../../assets/toys-from/greenlantern.png'
import img4 from '../../assets/toys-from/incredibles.png'
import img5 from '../../assets/toys-from/marvel.png'
import img6 from '../../assets/toys-from/ninja.png'
import img7 from '../../assets/toys-from/venom.png'
import img8 from '../../assets/toys-from/xmen.png'



const ToysFrom = () => {

    var settings = {

      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 5,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
    
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };

  return (
    <section className='py-8 my-8'>
    <div className='w-3/5 mx-auto'>
    <h1 className='text-4xl text-center text-zinc-800 font-bold leading-[4rem]'>Unleash The Hero Within!</h1>
    <p className='text-center my-4 text-xl tracking-[2px]'>Discover the Origins of Our Action Figure Toys</p>
    </div>

    <Slider {...settings} className='w-11/12 lg:w-4/5 mx-auto my-8'>
    <div className='w-full text-center'>
      <img src={img1} className='w-44 h-36'/>
    </div>
    <div className='w-full text-center'>
      <img src={img2} className='w-44 h-36'/>
    </div>
    <div className='w-full text-center'>
      <img src={img3} className='w-44 h-36'/>
    </div>
    <div className='w-full text-center'>
      <img src={img4} className='w-44 h-36'/>
    </div>
    <div className='w-full text-center'>
      <img src={img5} className='w-44 h-36'/>
    </div>
    <div className='w-full text-center'>
      <img src={img6} className='w-44 h-36'/>
    </div>
    <div className='w-full text-center'>
      <img src={img7} className='w-44 h-36'/>
    </div>
    <div className='w-full text-center'>
      <img src={img8} className='w-44 h-36'/>
    </div>
  </Slider>
  </section>
  )
}

export default ToysFrom