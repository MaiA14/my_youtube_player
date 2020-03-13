import React from 'react';
import VideoPreview from './VideoPreview.js';
import { Grid } from '@material-ui/core';

const VideoList = ({ videos, onVideoSelect }) => {
    const listOfVideos = videos.map((video, idx) =>
        <VideoPreview key={idx} video={video} onVideoSelect={onVideoSelect} />)
    return (
        <Grid className="list-container" container spacing={10}>{listOfVideos}</Grid>
    );
}


export default VideoList;