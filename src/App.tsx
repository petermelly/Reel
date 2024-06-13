import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import ButtonAppBar from "./conponent/ButtonAppBar";
import Bodybox from "./conponent/nextbody";

let App = () => {
  return (
    <Box className="App">
      <ButtonAppBar />
      <header className="App-header">
        <div className="app_video">
          <Bodybox imageURL="/video1.mp4" title="sport1" />
          <Bodybox
            imageURL="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
            title="ForBiggerEscapes"
          />
          <Bodybox
            imageURL="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            title="BigBuckBunny"
          />
          <Bodybox
            imageURL="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            title="ForBiggerBlazes"
          />
          <Bodybox imageURL="/video2.mp4" title="sport2" />
          <Bodybox
            imageURL="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            title="ElephantsDream"
          />
          <Bodybox
            imageURL="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
            title="WhatCarCanYouGetForAGrand"
          />
          <Bodybox imageURL="/video3.mp4" title="sport3" />
          <Bodybox
            imageURL="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
            title="SubaruOutbackOnStreetAndDirt"
          />
        </div>
      </header>
    </Box>
  );
};

export default App;
