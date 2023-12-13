import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [videos, setVideo] = useState([]);
  useEffect(()=>{
    fetch('api/videos').then(res=>res.json()).then(data=>{
      console.log(data)
      setVideo(data)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {videos.map((video, index)=>{
          return(
          <a key={index} href= {`https://www.youtube.com/watch?v=${video}`}>
            <img src={`https://img.youtube.com/vi/${video}/0.jpg`}></img>
          </a>
          )
        })}
      </header>
    </div>
  );
}

export default App;
