import React, { useEffect } from 'react'
import Header from './Header'
import ToysFrom from './ToysFrom'
import Categories from './Categories'
import { useLoaderData } from 'react-router-dom'
import AOS from 'aos';
import Gallery from './Gallery'
import FindStore from './FindStore'
import useTitle from '../../Hooks/useTitle'

const Home = () => {
  const data = useLoaderData()

  useEffect(() => {
    AOS.init();
  }, [])

  useTitle("Home")

  return (
    <>
    <Header></Header>
    <ToysFrom></ToysFrom>
    <Categories data={data}></Categories>
    <Gallery></Gallery>
    <FindStore></FindStore>
    </>
  )
}

export default Home