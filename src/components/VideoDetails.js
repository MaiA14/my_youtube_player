import React from 'react';
import { Paper, Typography } from '@material-ui/core'

const VideoDetails = ({ video }) => {
    if (!video) return <div>Loading...</div>
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <React.Fragment>
            <Paper elevation={6} className="video-details">
                <iframe frameBorder="0" height="100%" width="100%"
                    title="Video Player" src={videoSrc} />
            </Paper>
            <Paper elevation={6} className="video-title-and-desc">
                <Typography variant="h5">{video.snippet.title}</Typography>
                <Typography variant="subtitle2" className="video-description">{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetails;

