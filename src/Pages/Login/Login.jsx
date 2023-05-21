import React, { useContext } from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';



const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from || '/';

    const handleLogin = (e) =>{
        e.preventDefault();



        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email, password)

        signIn(email, password)
        .then(res => {
         console.log(res.user)
         form.reset()
         navigate(from, {replace:true})
          
        }).catch(err => console.log(err))
    }

   

  return (
    <div className="hero min-h-[80vh] bg-base-200">
  <div className="hero-content flex-col lg:flex-row">

    <div className="text-center lg:text-left w-full md:w-1/2">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    
    <form onSubmit={handleLogin} className='w-4/5 mx-auto lg:w-2/5'>
    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
      <div className="card-body">
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
          <button className="btn btn-error text-white bg-[#FF1821] hover:bg-[#db141a] text-lg my-4" type='submit'>Login</button>
        </div>
        <div className="form-control">
          <Link to='/signup' className="text-[#FF1821] hover:text-[#FF1821] text-lg my-4" type='submit'>Don't have an account? Register</Link>
        </div>
      </div>
    </div>
    </form>


  </div>
</div>
  )
}

export default Login