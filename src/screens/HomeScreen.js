import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import DataList from "../Component/DataList";
import axios from 'axios';
import { Card } from "react-native-elements";


class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Users: []
    };
  }

  getUsersData() {
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then(res => {
        // console.log(res.data)
        const data = res.data;
        this.setState({ Users: data })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  componentDidMount() {
    this.getUsersData()
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.Users}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return (
              <Card style={styles.card}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('UserDetails', { _id: item.id })}
                >
                  <DataList
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
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  heading: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 5,
  }
});

export default HomeScreen;
