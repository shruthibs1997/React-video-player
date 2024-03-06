import React, { useRef, useState, useEffect } from 'react';
import PlayListComp from './playListComp';
import styled from 'styled-components';

const VideoPlayer = ({ playlist,setPlaylist }) => {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);


  const onVideoClick = (index) => {
    console.log("index",index)
    setCurrentVideoIndex(index);
  };

  useEffect(() => {
    const video = videoRef.current;

    const handleEnded = () => {
      if (playlist.length > 0) {
        console.log("entered")
        setCurrentVideoIndex((prev) => (prev + 1));
      }else{
        setCurrentVideoIndex(0);
      }
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, [currentVideoIndex,playlist]);

  useEffect(() => {
    const video = videoRef.current;
    video.load(); 
  }, [currentVideoIndex,playlist]);

  return (
    <VideoPlayerStyle>
      <video className="videoComp" ref={videoRef} controls autoPlay>
        {playlist.length > 0 && (
          <source src={playlist[currentVideoIndex]?.sources[0]} type="video/mp4"/>
        )}
      </video>
      <PlayListComp playlist={playlist} setPlaylist={setPlaylist} onVideoClick={onVideoClick}/>
    </VideoPlayerStyle>
  );
};

export default VideoPlayer;

const VideoPlayerStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
  .videoComp{
    width: 90%;
    height: 500px;
    margin: auto;
    margin-top: 0px;
    object-fit: cover;
  }

  @media screen and (max-width: 1200px){
    grid-template-columns: 100%;
  }
}

`
