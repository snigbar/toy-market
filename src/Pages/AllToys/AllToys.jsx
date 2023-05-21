import React, { useEffect, useState } from 'react'
import TabularData from '../../Components/TabularData/TabularData';


const AllToys = () => {

    
    const [allData, setAllData] = useState([])
    const [displayData, setDisplayData] = useState([])
    const [limit, setLimit] = useState(20);
 

    useEffect(()=>{

       const fetchData =async(value) =>{
       
        const response =await fetch(`https://toy-market-server-rouge.vercel.app/allToys?limit=${value}`)
        const data = await response.json()
        setAllData(data);

    }

    fetchData(limit);
    
},[limit])


 const handleSearch = (e) =>{
    e.preventDefault();



        const fetchData =async() =>{
        
         const response =await fetch(`https://toy-market-server-rouge.vercel.app/allToys?`)
         const data = await response.json()
         const search = e.target.search.value.toLowerCase();
         const searchResult = data.filter(word => word.product_name.toLowerCase().indexOf(search) > -1);
         setDisplayData(searchResult)
     }
 
     fetchData();

 }

  return (
    <section  className='py-10'>

    <div className='w-4/5 mx-auto'>
        <h1 className='text-4xl text-center text-zinc-800 font-bold leading-[4rem]'>All Toys</h1>

        <div className='py-4'>
            <form className='form-control flex-row items-center justify-end gap-3' onSubmit={handleSearch}>
            <input type="text" name='search' className='input border-r-slate-900 p-2'/>
            <button className='btn btn-secondary text-white bg-[#FF1821] hover:bg-[#e4161d] text-xs'>Search</button>
            </form>
        </div>

        <div className="container">

        <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th className=' text-white bg-[#FF1821] hover:bg-[#e4161d] text-center w-max'>Seller</th>
        <th className=' text-white bg-[#FF1821] hover:bg-[#e4161d]'>TOY Name</th>
        <th className=' text-white bg-[#FF1821] hover:bg-[#e4161d]'>Category</th>
        <th className=' text-white bg-[#FF1821] hover:bg-[#e4161d]'>Price</th>
        <th className=' text-white bg-[#FF1821] hover:bg-[#e4161d]'>
            Quantity
        </th>
        <th className=' text-white bg-[#FF1821] hover:bg-[#e4161d]'>Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row */}
    
      {displayData.length !== 0 ? displayData.map(el => <TabularData key={el._id} data={el}>{el._id}</TabularData>): allData.map(el => <TabularData key={el._id} data={el}>{el._id}</TabularData>)}
     
    </tbody>   
  </table>

           
 </div>

    <div className="w-full flex justify-center my-8">
        <button className='btn btn-error text-white bg-cyan-500 hover:bg-cyan-700 border-none' onClick={()=>{{setLimit(limit == 20? 0:20)};setDisplayData([])}}>{limit == 20?"show All":"show Less"}</button>
    </div>
    </div>
    </section>
  )
}

export default AllToys