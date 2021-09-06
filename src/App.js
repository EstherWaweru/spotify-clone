import Login from './Login';
import './App.css';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
  //Run code based on given condition
  const [token,setToken] = useState(null);
  useEffect(() =>{
      const hash = getTokenFromUrl();
      window.location.hash = "";
      const _token = hash.access_token;
      
      if (_token){
        setToken(_token)
        spotify.setAccessToken(_token);
        spotify.getMe().then(user => {
          console.log(user);
        });
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
