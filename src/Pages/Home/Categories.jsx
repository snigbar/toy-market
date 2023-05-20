import React, { useState } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ToyCards from '../../Components/ToyCards.jsx/ToyCards';


const Categories = ({data}) => {

  
    
  return (
    <section  className='py-10'>

        <div className='w-3/5 mx-auto'>
            <h1 className='text-4xl text-center text-zinc-800 font-bold leading-[4rem]'>Shop by Categories</h1>
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
      
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.filter(data => data.category === "DC").map(el => <ToyCards key={el._id} toydata={el}>{el._id}</ToyCards>)}
        </div>
      
    </TabPanel>
    <TabPanel>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.filter(data => data.category === "Marvel").map(el => <ToyCards key={el._id} toydata={el}>{el._id}</ToyCards>)}
    </div>

    </TabPanel>
    <TabPanel>
      
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.filter(data => data.category === "The Boys").map(el => <ToyCards key={el._id} toydata={el}>{el._id}</ToyCards>)}
    </div>

    </TabPanel>
    <TabPanel>
     
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.filter(data => data.category === "The Incredibles").map(el => <ToyCards key={el._id} toydata={el}>{el._id}</ToyCards>)}
    </div>

    </TabPanel>
    <TabPanel>
      
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.filter(data => data.category === "X-Men").map(el => <ToyCards key={el._id} toydata={el}>{el._id}</ToyCards>)}
    </div>

    </TabPanel>
    <TabPanel>
    
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.filter(data => data.category === "Ninja Turtles").map(el => <ToyCards key={el._id} toydata={el}>{el._id}</ToyCards>)}
    </div>

    </TabPanel>
    <TabPanel>
     
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.filter(data => data.category === "Others").map(el => <ToyCards key={el._id} toydata={el}>{el._id}</ToyCards>)}
    </div>

    </TabPanel>
  </Tabs>


    </section>
  )
}

export default Categories