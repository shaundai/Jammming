import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [{name: 'Happy', artist: 'Pharrell', album: 'Pursuit of Happyness', id: 5886},
      {name: 'PYT', artist: 'Michael Jackson', album: 'BAD', id: 5887},
      {name: 'Tearin Up My Heart', artist: 'N Sync', album: 'N Sync', id: 5888},
      {name: 'ABC', artist: 'Mother Goose', album: 'Adonis Songs', id: 5889}],
      playlistName: 'Hit Songs',
      playlistTracks: [{name: 'Happy', artist: 'Pharrell', album: 'Pursuit of Happyness', id: 5886},
      {name: 'PYT', artist: 'Michael Jackson', album: 'BAD', id: 5887}]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      tracks.push(track);
    }
    this.setState({
      playlistTracks: tracks
    })
  }

  removeTrack(track){
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({
      playlistTracks: tracks
    })
  }
  
  updatePlaylistName(name){
    this.setState({
      playListName: name
    })
  }

  savePlaylist(){
    let trackURIs = ;
  }

  render(){
  return (
    <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
      <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName}/>
    </div>
  </div>
</div>
  );
}
}
export default App;
