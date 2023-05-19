import React from 'react'
import logo from '../../assets/littols.png'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 justify-between items-center px-4 py-6">
  <div className="navbar-start w-max">

    {/* hamburger menu */}
    <div className="dropdown me-4">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
        <li><a className='active:bg-cyan-400'>Item 1</a></li>
        <li><a className='active:bg-cyan-400'>Item 2</a></li>
        <li><a className='active:bg-cyan-400'>Item 3</a></li>

      </ul>
    </div>
    {/* logo */}
    <a href='/' className="normal-case text-3xl">
    <img src={logo} className='w-52'/>
    </a>
  </div>

  {/* center links */}
  <div className="text-xl navbar-center hidden lg:flex gap-2">
    <ul className="menu menu-horizontal px-1">
      <li><a className='active:bg-cyan-400'>Item 1</a></li>
      <li><a className='active:bg-cyan-400'>Item 2</a></li>
      <li><a className='active:bg-cyan-400'>Item 3</a></li>
    </ul>
  </div>



    <div className="dropdown dropdown-end text-lg">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
            </a>
          </li>
          
          <li><a>Logout</a></li>
        </ul>
      </div>
</div>
  )
}

export default Navbar

