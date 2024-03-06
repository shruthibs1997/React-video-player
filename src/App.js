import './App.css';
import VideoPlayer from './components/vedio';
import List from "./components/data.json"
import { useEffect, useState } from 'react';
import PlayListComp from './components/playListComp';

function App() {
  const [playlist,setPlaylist] = useState([]);

  const getAllList =()=>{
    const arr = List.categories.flatMap((e)=>{
       return e.videos.map((x)=>{
        return x
       })
    })
    setPlaylist(arr)
  }

  useEffect(()=>{
    getAllList()
  },[])
  
  return (
    <div className="App">
      <VideoPlayer playlist={playlist} setPlaylist={setPlaylist}/>
      {/* <PlayListComp  videos={playlist} playlist={playlist} setPlaylist={setPlaylist}/> */}
    </div>
  );
}

export default App;
