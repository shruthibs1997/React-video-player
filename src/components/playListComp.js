import React, { useEffect, useState } from 'react';
import styled from "styled-components"

const PlayListComp = ({onVideoClick,setPlaylist,playlist}) => {

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    const dragIndex = e.dataTransfer.getData('index');
    const dragVideo = playlist[dragIndex];
    const updatedPlaylist = [...playlist];
    updatedPlaylist.splice(dragIndex, 1);
    updatedPlaylist.splice(index, 0, dragVideo);
    setPlaylist(updatedPlaylist);
  };

  return (
    <PlayListCompStyled>
        {playlist && playlist.map((video, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            onClick={() => onVideoClick(index)}
            className='outerBox'
          >
            <div className='title'>{video.title}</div>
            <div className='subtitle'>{video.subtitle}</div>
            <div className='description'>{video.description}</div>
          </div>
        ))}
    </PlayListCompStyled>
  );
};

export default PlayListComp;


const PlayListCompStyled = styled.div`
    border: 1px solid #D4D4D4;
    border-radius: 8px;
    width: 95%;
    height: 600px;
    overflow-y: scroll;
    .outerBox {
        background-color: #F5F5F5;
        padding: 2%;
        text-align: left;
        border-radius: 5px;
        margin-bottom: 2px;
        cursor: pointer;
        transition: box-shadow 0.3s ease;
        .title{
            font-size: 18px;
            font-weight: 600;
        }
        .subtitle{
            font-size: 14px;
            font-weight: 600;
        }
        .description{
            font-size: 12px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 10px;
    }
    .outerBox:hover{
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1) inset;
    }
    @media screen and (max-width: 1200px){
        width: 90%;
        margin: auto;
        margin-top: 25px;
    }
    
`
