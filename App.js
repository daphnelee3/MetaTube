import React, { Component } from 'react';
import { View, Text } from 'react-native';
import YTSearch from 'youtube-api-search';
import AppHeader from './components/AppHeader';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyBB9Uz86EWZny_D3zCDpPGwc_fLXZEs7pc';

export default class App extends Component {
  state = {
    loading: false,
    videos: []
  }

  componentDidMount() {
    this.searchYT('cute animals');
  }

  onPressSearch = term => {
    this.searchYT(term);
  }

  searchYT = term => {
    this.setState({ loading: true });
    YTSearch({ key: API_KEY, term }, videos => {
      console.log(videos);
      this.setState({
        loading: false,
        videos
      });
    });
  }

  render() {

    const { loading, videos } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <AppHeader headerText="MetaTube 🎥" />
        <Text style={{ color: 'white', alignSelf: 'center', marginTop: 25, fontSize: 16 }}>Search for a video to find one on YouTube </Text>
        <SearchBar
          loading={loading}
          onPressSearch={this.onPressSearch}
        />
        <VideoList videos={videos} />
      </View>
    );
  }
}
