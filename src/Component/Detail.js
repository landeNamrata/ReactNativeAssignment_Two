import React, { Component } from 'react'
import { StyleSheet, View, AsyncStorage } from "react-native";
import { Text, Button, Card } from "react-native-elements"

class Detail extends Component {
    render() {
        return (
            <View style={{ height: 50, marginTop: 50 }}>
                <Card>
                    <Text style={styles.test}>Congrates !</Text>
                    <Text style={styles.text}>You Logged In Successfully</Text>
                    <Button
                        onPress={this._logout}
                        title="Logout"
                    />
                </Card>
            </View>
        )
    }

    _logout = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth')
    }
}


const styles = StyleSheet.create({
    test: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 25,
    },
    text: {
        alignSelf: 'center',
        fontSize: 20,
    }
});

export default Detail;
