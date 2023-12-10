import './App.css'
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import firebaseConfig from './firebase_config';
import { useState } from 'react';


const app = initializeApp(firebaseConfig);

function App() {
  const provider = new GoogleAuthProvider();

  const [user, setUser]=useState({isLogin:false, name:'', email: '', photo:''});
  const handleLogin=()=>{
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then(res=>{
      const {displayName, email, photoURL}= res.user;
      setUser({isLogin: true, name: displayName, email:email, photo:photoURL})
    })
    .catch(err=>{
      console.log(err);
    })
  }

  const handleLogout=()=>{
    const auth = getAuth();
    signOut(auth)
    .then(()=>{
    setUser({isLogin:false, name:'', email: '', photo:''})
    })
    .catch(err=>{
      console.log(err);
    }) 
  }

  return (
    <>
    {user.isLogin ? <button onClick={handleLogout}>Sign Out</button> : <button onClick={handleLogin}>Sign In</button>}
      
      {user.isLogin && 
      <div>
        <h3>Hello {user.name}</h3>
        <h3>Your Mail {user.email}</h3>
        <img src={user.photo} alt="" />
      </div>}
    </>
  )
}

export default App
