import { useContext } from 'react';

import { Navigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading) {
        // loader
        return <div className="h-screen flex justify-center items-center">
        <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full border-2 border-white"></div>
        </div> 
        </div>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;