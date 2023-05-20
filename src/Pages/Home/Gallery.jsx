import React from 'react'
import img1 from "../../assets/Gallery/img1.jpg"
import img2 from "../../assets/Gallery/img2.jpg"
import img3 from "../../assets/Gallery/img3.jpg"
import img4 from "../../assets/Gallery/img4.jpg"
import img5 from "../../assets/Gallery/img5.jpg"
import img6 from "../../assets/Gallery/img6.jpg"

const Gallery = () => {
  return (
    <section  className='py-10'>

        <div className='w-3/5 mx-auto'>
            <h1 className='text-4xl text-center text-zinc-800 font-bold leading-[4rem]'>Our Gallery</h1>
            <p className='text-center my-8 text-lg tracking-[2px]'>Only those teachers who really love children and have vast experience work for us</p>
        </div>

<div className="container lg:px-32 px-4 py-4 mx-auto items-center">
  <div className="grid grid-cols-4 grid-rows-3 grid-flow-row gap-2">
    <div className="w-full col-span-1 row-span-2">
      <img
        src={img1}
        alt="Photo by Claudio Schwarz on Unsplash"
        className=" h-full w-full object-cover rounded opacity-90 hover:opacity-100"/>
    </div>
    <div className="w-full col-span-2 row-span-2">
      <img
        src={img4}
        alt="Photo by Claudio Schwarz on Unsplash"
        className=" h-full w-full object-cover rounded opacity-90 hover:opacity-100 "/>
    </div>
    <div className="w-full col-span-1 row-span-2">
      <img
        src={img3}
        alt="Photo by Claudio Schwarz on Unsplash"
        className="h-full w-full object-cover rounded opacity-90 hover:opacity-100 "/>
    </div>
    <div className="w-full col-span-2">
      <img
        src={img2}
        alt="Photo by Claudio Schwarz on Unsplash"
        className=" h-full w-full object-cover rounded opacity-90 hover:opacity-100 "/>
    </div>
    <div className="w-full">
      <img
        src={img5}
        alt="Photo by Claudio Schwarz on Unsplash"
        className=" h-full w-full object-cover rounded opacity-90 hover:opacity-100 "/>
    </div>
   
    <div className="w-full">
      <img
        src={img6}
        alt="Photo by Claudio Schwarz on Unsplash"
        className=" h-full w-full object-cover rounded opacity-90 hover:opacity-100 "/>
    </div>
  </div>
</div>


    </section>
  )
}

export default Gallery