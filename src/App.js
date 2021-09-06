import Login from './Login';
import './App.css';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';

function App() {
  //Run code based on given condition
  const [token,setToken] = useState(null);
  useEffect(() =>{
      const hash = getTokenFromUrl();
      window.location.hash = "";
      const _token = hash.access_token;
      
      if (_token){
        setToken(_token)
      }
      console.log("*********",token);
    },[]);
  
  
  
  return (
    <div className="app">
      {/* spotify logo
      login with spotif button */}
    {token ? (
      <h1>I am a player</h1>
    ) : (
      <Login/>
    )}
    
    </div>
  );
}

export default App;
