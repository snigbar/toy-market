import React, { useContext } from 'react'
import logo from '../../assets/littols.png'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProviders';

const Navbar = () => {

  const { user,logOut} = useContext(AuthContext);


  return (
    <div className="navbar bg-base-100 justify-between items-center px-4 py-6">
  <div className="navbar-start w-max">

    {/* hamburger menu */}
    <div className="dropdown me-4">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
      <li><NavLink to='/'className='text-sm active:bg-cyan-500'>Home</NavLink></li>
      <li><NavLink to='/alltoys'className='text-sm active:bg-cyan-500'>All Toys</NavLink></li>
      <li><NavLink to='/blog'className='text-sm active:bg-cyan-500'>Blog</NavLink></li>
    {
      user &&   <><li><NavLink to='/mytoys'className='text-sm active:bg-cyan-500'>My Toys</NavLink></li>
      <li><NavLink to='/addToy'className='text-sm active:bg-cyan-500'>Add Toy</NavLink></li></>
    }
      </ul>
    </div>
    {/* logo */}
    <a href='/' className="normal-case text-3xl">
    <img src={logo} className='w-44'/>
    </a>
  </div>

  {/* center links */}
  <div className="navbar-center hidden lg:flex gap-2">
    <ul className="menu menu-horizontal px-1 gap-4">
      <li><NavLink to='/'className='text-sm active:bg-cyan-500'>Home</NavLink></li>
      <li><NavLink to='/alltoys'className='text-sm active:bg-cyan-500'>All Toys</NavLink></li>
      <li><NavLink to='/blog'className='text-sm active:bg-cyan-500'>Blog</NavLink></li>
      {
      user &&   <><li><NavLink to='/mytoys'className='text-sm active:bg-cyan-500'>My Toys</NavLink></li>
      <li><NavLink to='/addToy'className='text-sm active:bg-cyan-500'>Add Toy</NavLink></li></>
    }
    </ul>
  </div>

<div className='space-x-4'>
  {user?.displayName 
  && <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-cyan-500">
     <div className="w-10 rounded-full">
          <img src={user.photoURL} title={`${user.displayName} (reload if image doesn't appear)`}/>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 drop-shadow-xl menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            {user?.displayName}
          </a>
        </li>
        <li><Link onClick={()=>logOut()}>Logout</Link></li>
      </ul>
    </div>
  }
   {user?<button className="btn btn-error text-white bg-[#FF1821] hover:bg-[#e4161d] border-none mx-auto text-xs rounded-xl" onClick={()=>logOut()}>Logout</button>:<Link to='/login'><button className="btn btn-primary hover:bg-indigo-800 px-4 text-xs">Login</button></Link>} 
</div>
</div>
  )
}

export default Navbar

