import React from "react";
import styles from "./MusicSearch.module.css";

import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import PlayList from "./PlayList/PlayList";

class MusicSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistTracks: []
    };

    this.search = this.search.bind(this);
  }
  search() {
    fetch("./songs.json", {
      cache: "no-store"
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }
  render() {
    return (
      <div>
        <SearchBar onSearch={this.search} />
        <div className={styles.wrapper}>
          <SearchResults />
          <PlayList />
        </div>
      </div>
    );
  }
}

export default MusicSearch;
