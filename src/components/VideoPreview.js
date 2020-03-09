import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

const VideoPreview = ({ video, onVideoSelect }) => {
    return (
        <Grid item xs={12}>
            <Paper className="video-preview-container" onClick={() => { onVideoSelect(video) }}>
                <img style={{width:"168px", marginRight: '20px'}}
                 alt="thumbnail" src={video.snippet.thumbnails.medium.url}/>
                <Typography variant="subtitle1" className="video-title">
                        {video.snippet.title}
                </Typography>
            </Paper>
        </Grid>
    )
}

export default VideoPreview;