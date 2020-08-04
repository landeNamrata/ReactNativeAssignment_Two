import React, { Component } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity,AsyncStorage } from "react-native";
import { Text } from "react-native-elements"
import Spacer from "../Component/Spacer";


const userInfo = { username: 'admin', password: 'admin123' }

class SigninScreen extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <View>
                <Text style={styles.text}>Login To My App</Text>
                <Spacer>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        autoCapitalize='none'
                        onChangeText={(username) => this.setState({ username })}
                        value={this.state.username}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                    />
                    <View style={styles.view}>
                        <TouchableOpacity
                            style={{ marginBottom: 5 }}
                            onPress={this._login}
                        >
                            <Text
                                style={styles.button1}
                            >Login</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{marginTop:30 , fontWeight:'bold'}}>Username : admin</Text>
                    <Text style={{fontWeight:'bold'}}>Password : admin123</Text>
                </Spacer>
            </View>
        )
    }

    _login = async () => {
        if (userInfo.username === this.state.username && userInfo.password === this.state.password) {
           // alert('Logged In')
           await AsyncStorage.setItem('isLoggedIn','1');
            this.props.navigation.navigate('Detail')
        }
        else {
            if(this.state.username === ''){
                alert('Please Enter Email Id')
            }
            else if(this.state.password === ''){
                alert('Please Enter Password')
            }
            else{
                if(userInfo.username != this.state.username)
                alert('InCorrect Email Id')
                else if(userInfo.password != this.state.password)
                alert('InCorrect Password')
              }
        }
    }

}
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        marginTop: '20%',
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    input: {
        padding: 5,
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomWidth: 2,
        marginBottom: 20
    },
    button1: {
     alignSelf:'center',
     color:'white',
     fontWeight: 'bold',
    },
    view:{
        padding:5,
        backgroundColor: 'blue',
        borderRadius: 10,
        marginHorizontal:80
    }
});

export default SigninScreen;
