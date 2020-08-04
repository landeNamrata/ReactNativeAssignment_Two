import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import axios from 'axios';
import { Card } from "react-native-elements";
import ImageDetails from "../Component/ImageDetails";

class ImagesScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ImageData: []
    };
  }
  getImageData() {
    axios.get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(res => {
        const data = res.data;
        this.setState({ ImageData: data })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  componentDidMount() {
    this.getImageData()
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.ImageData}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return (
              <Card style={styles.card}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Image', { _id: item.id })}
                >
                  <ImageDetails
                    item={item}
                  />
                </TouchableOpacity>
              </Card>
            )
          }}
        />
      </View>

    )
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: '50%'
  }
});
export default ImagesScreen;