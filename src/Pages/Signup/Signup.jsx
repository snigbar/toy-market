import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  
    const handleSignUp = (e) =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
    
        console.log(name,email,password)
        
        
    }

   

  return (
    <div className="hero min-h-[80vh] bg-base-200">
  <div className="hero-content flex-col lg:flex-row">

    <div className="text-center lg:text-left w-full md:w-1/2">
      <h1 className="text-5xl font-bold">Register</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    
    <form onSubmit={handleSignUp} className='w-4/5 mx-auto lg:w-2/5'>
    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="your name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-error text-white bg-[#FF1821] hover:bg-[#db141a] text-lg my-4" type='submit'>Sign Up</button>
        </div>
        <div className="form-control">
        <Link to='/login' className="text-[#FF1821] hover:text-[#FF1821] text-lg my-4" type='submit'>Don't have an account? Register</Link>
        </div>
      </div>
    </div>
    </form>


  </div>
</div>
  )
}

export default Signup