import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Categories = ({data}) => {

    const [toys, setToys] = useState(data);
  
    
  return (
    <section className='py-8 my-8'>

        <div className='w-3/5 mx-auto'>
            <h1 className='text-4xl text-center text-zinc-800 font-bold leading-[4rem]'>Unleash The Hero Within!</h1>
            <p className='text-center my-8 text-lg tracking-[2px]'>Unleash the thrill of action and ignite endless adventures with our dynamic collection of action toys. Let your imagination take flight as heroes conquer challenges and save the day!</p>
        </div>

    <Tabs className="w-4/5 mx-auto py-8 ">
    <TabList>
      <Tab>DC</Tab>
      <Tab>Marvel</Tab>
      <Tab>The Boys</Tab>
      <Tab>The Incredibles</Tab>
      <Tab>X-Men</Tab>
      <Tab>Ninja Turtle</Tab>
      <Tab>Others</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>


    </section>
  )
}

export default Categories