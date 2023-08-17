import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Colors } from "../../Constants/ColorConstants";

const httpLinkPrefix = 'https://eksvideo.com/videos/'

export const VideoPlayer = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl =`${httpLinkPrefix}${url}`;
  console.log('videoUrl =', videoUrl);
  return (
    <div style={videoDiv}>
      <ReactPlayer
        url={videoUrl}
        playing={isPlaying}
        controls={true}
        width="100%"
        pip={true}
        loop={true}
        onMouseEnter={() => setIsPlaying(true)}
        onMouseLeave={() => setIsPlaying(true)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

const videoDiv = {
  margin: "1% 1% 0 1%",
  width: "18%",
  backgroundColor: Colors.kisEduBlue,
};

export default VideoPlayer;
