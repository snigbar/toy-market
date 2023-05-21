import React, { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/firebase.confi';



export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app)
   
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name,photourl) =>{

        updateProfile(auth.currentUser, {
        displayName: name, photoURL: photourl
        }).then((res) => {
        
        }).catch((error) => {
        console.log(error)
        });
}


const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)

        })

        return ()=>{unsubscribe()}
    },[])




    const authInfo ={user,setUser,loading,setLoading,createUser,updateUser,signIn }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider