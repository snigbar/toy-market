import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import store1 from '../../assets/store/store1.jpg'
import store2 from '../../assets/store/store2.jpg'
import store3 from '../../assets/store/store3.jpg'

const FindStore = () => {

    const images = [store1,store2,store3]

  return (
    <section  className='py-10'>

        <h1 className='text-4xl text-center text-zinc-800 font-bold leading-[4rem] my-4'>Our Store</h1>
        <p className='text-center my-4 tracking-[1px] w-1/2 mx-auto'>We sell high-quality toys for kids of any age. Bring happiness to your children with our help. Purchase interesting toys using a special discount.</p>
        <div className='flex gap-4 flex-col-reverse md:flex-row-reverse items-center'>

        <div className='w-11/12 lg:w-3/5'>
        <MapContainer center={[51.7527, 0.3394]} zoom={13} scrollWheelZoom={false} style={{height:"80vh", width:"100%", scrollX:"none",overflow:"hidden"}}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.7527, 0.3394]}>
        <Popup>
        1672 Augusta Park,Saint Albans,West Virginia,USA
            </Popup>
        </Marker>
        
        </MapContainer>
        </div>

        <div className='w-11/12 lg:w-2/5'>
        <Slide autoplay={true} infinite={true} duration={1500}>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})`, 'backgroundSize': "cover"}}>
                    <span>1601 COLLEGE AVE BLUEFIELD WV 24701-3843 USA</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})`,  'backgroundSize': "cover"}}>
                    <span>619 2ND AVE MONTGOMERY WV 25136-2435 USA</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})`, 'backgroundSize': "cover"}}>
                    <span>1201 MEADOW RUN RD ORMA WV 25268-8649 USA</span>
                </div>
            </div>
        </Slide>
        </div>

        </div>

    </section>
  )
}

export default FindStore