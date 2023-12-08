import './App.css'
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseConfig from './firebase_config';


const app = initializeApp(firebaseConfig);

function App() {
  const provider = new GoogleAuthProvider();
  const handleButton=()=>{
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then(res=>{
      const {displayName, email, photoURL}= res.user;
      console.log(displayName, email, photoURL);
    })
    
  }

  return (
    <>
      <button onClick={handleButton}>Sign In</button>
      {/* <h3>You Are {email}</h3> */}
    </>
  )
}

export default App
