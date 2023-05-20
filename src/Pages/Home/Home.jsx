import React, { useEffect } from 'react'
import Header from './Header'
import ToysFrom from './ToysFrom'
import Categories from './Categories'
import { useLoaderData } from 'react-router-dom'
import AOS from 'aos';

const Home = () => {
  const data = useLoaderData()

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
    <Header></Header>
    <ToysFrom></ToysFrom>
    <Categories data={data}></Categories>
    </>
  )
}

export default Home