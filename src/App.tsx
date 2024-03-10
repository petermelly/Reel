import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import ButtonAppBar from './conponent/ButtonAppBar';
import Bodybox from './conponent/nextbody';

let App=()=> {
  return (
    <Box className="App">
      <ButtonAppBar/>
      <header className="App-header">
      <div className='app_video'>
        <Bodybox imageURL='https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.webm' title='chrome.webm'/>
        <Bodybox imageURL='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' title='ForBiggerEscapes'/>
        <Bodybox imageURL='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' title='BigBuckBunny'/>
        <Bodybox imageURL='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' title='ForBiggerBlazes'/>
        <Bodybox imageURL="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" title='ElephantsDream'/>
        <Bodybox imageURL='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4' title='WhatCarCanYouGetForAGrand'/>
        <Bodybox imageURL='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4' title='SubaruOutbackOnStreetAndDirt'/>
      </div>
      </header>
    </Box>
  );
}

export default App;
