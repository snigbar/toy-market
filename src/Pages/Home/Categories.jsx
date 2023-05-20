import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Categories = ({data}) => {

    const [toys, setToys] = useState(data);
    console.log(toys)
    
  return (
    <section className='py-8 my-8'>

        <div className='w-3/5 mx-auto'>
            <h1 className='text-4xl text-center text-zinc-800 font-bold leading-[4rem]'>Unleash The Hero Within!</h1>
            <p className='text-center my-8 text-lg tracking-[2px]'>Unleash the thrill of action and ignite endless adventures with our dynamic collection of action toys. Let your imagination take flight as heroes conquer challenges and save the day!</p>
        </div>

        <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>


    </section>
  )
}

export default Categories