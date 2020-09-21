import React from "react";
import { FlatList } from "react-native";
import axios from "axios";
import AlbumItem from "./AlbumItem";

class AlbumList extends React.Component {
  state = { albums: [], titles: [] };

  fetch = async () => {
    const response = await axios.get(
      "http://rallycoding.herokuapp.com/api/music_albums"
    );
    this.setState({ albums: response.data });
    console.log(`response is ${response.data}`);

    this.setState({ titles: response.data.map((album) => album.title) });
  };

  componentDidMount() {
    this.fetch();
  }

  render() {
    return (
      <FlatList
        data={this.state.albums}
        renderItem={({ item }) => {
          return (
            <AlbumItem
              title={item.title}
              artist={item.artist}
              url={item.url}
              image={item.image}
              thumbnail_image={item.thumbnail_image}
            />
          );
        }}
        keyExtractor={(item) => item.title}
      />
    );
  }
}

export default AlbumList;
