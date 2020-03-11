import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import youtubeService from './api/youtubeService.js';
import { SearchBar, VideoDetails, VideoList } from './components';
import global from '../src/assets/styles/global.scss';

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.handleSubmit('javascript')
  }

  handleSubmit = async (searchTerm) => {
    const res = await youtubeService.get('search',
      {
        params: {
          part: 'snippet',
          maxResults: 5,
          key: process.env.REACT_APP_API_KEY,
          q: searchTerm,
        }
      });
    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    const { selectedVideo, videos } = this.state;
    return (

      <div className="main-container">
        <div className="header-container">
        <img src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1583686690/hjcikbyf3xy0ab9u2ipp.png" width="34" style={{marginRight:"5px"}}/>
        <h1 className="app-header">YouTube Player</h1>
          <SearchBar onFormSubmit={this.handleSubmit} />
        </div>
        <Grid className="app-grid" container spacing={10}></Grid>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={8} className="details-container">
              <VideoDetails video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
