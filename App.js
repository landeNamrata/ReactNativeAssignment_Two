import React, { Component } from "react"
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DataList from "./src/Component/DataList";
import ImagesScreen from "./src/screens/ImagesScreen"
import GoogleMap from "./src/screens/GoogleMap";
import Detail from "./src/Component/Detail";
import ImageDetails from "./src/Component/ImageDetails";
import Signin from "./src/screens/SigninScreen";
import { ActivityIndicator, StatusBar, StyleSheet, View, AsyncStorage } from 'react-native'


const navigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    Album: createStackNavigator({
      Albums: HomeScreen,
      DataList: DataList,
    }),
    Images: createStackNavigator({
      Images: ImagesScreen,
      Image: ImageDetails
    }),
    GoogleMap: GoogleMap,
    Account: createStackNavigator({
      Signin: Signin,
      Detail: Detail
    })

  })
})
const AuthStack = createStackNavigator({ Signin: Signin })

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._loadData();
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
  _loadData = async () => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    this.props.navigation.navigate(isLoggedIn !=='1' ? 'Auth' : 'App')
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


// export default createAppContainer(navigator);
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: navigator,
    Auth: AuthStack
  },
  {
    initialRouteName: 'App'
  }
));
