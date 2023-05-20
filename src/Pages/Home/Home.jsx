import React from 'react'
import Header from './Header'
import ToysFrom from './ToysFrom'
import Categories from './Categories'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const data = useLoaderData()
  return (
    <>
    <Header></Header>
    <ToysFrom></ToysFrom>
    <Categories data={data}></Categories>
    </>
  )
}

export default Home