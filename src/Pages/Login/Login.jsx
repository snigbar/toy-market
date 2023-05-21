import React, { useContext } from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import useTitle from '../../Hooks/useTitle';
import { GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import swal from 'sweetalert';



const Login = () => {

    const {signIn,auth} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from || '/';
    
    if(location.state?.from){
        swal({
            text: "You need to login first",
          });
    }
   

    useTitle("login")

    const googleProvider = new GoogleAuthProvider();

    const handleLogin = (e) =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email, password)

        signIn(email, password)
        .then(res => {
         form.reset()
         navigate(from, {replace:true})
          
        }).catch(err => console.log(err))
    }

    // Google login
const handleGoogleSignIn =() =>{
    signInWithPopup(auth,googleProvider)
    .then(res =>{
        const loggedUser = res.user
        setUser(loggedUser)
        navigate(from, {replace:true});
    }).catch(err => console.log(err))
}


   

  return (
    <>

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
          <button aria-label="Login with Google" type="button"
                    className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500" onClick={handleGoogleSignIn}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path
                            d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z">
                        </path>
                    </svg>
                    <p>Login with Google</p>
                </button>
        </div>
        <div className="form-control">
          <Link to='/signup' className="text-[#FF1821] hover:text-[#FF1821] text-lg my-4" type='submit'>Don't have an account? Register</Link>
        </div>
      </div>
    </div>
    </form>


  </div>

</div>
</>
  )
}

export default Login