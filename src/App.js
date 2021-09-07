import Login from './Login';
import './App.css';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
const spotify = new SpotifyWebApi();

function App() {
  //Run code based on given condition
  const [token,setToken] = useState(null);
  const [{}, dispatch] = useDataLayerValue();
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
    {token ? 
      <Player/>
     : 
      <Login/>
    }
    
    </div>
  );
}

export default App;
