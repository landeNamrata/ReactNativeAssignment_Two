import React from 'react'
import { Text, StyleSheet, View, Image, Linking } from "react-native";

const DataList = ({ item }) => {
    return (
        <View>
            <View style={styles.viewStyle}>
                <View style={styles.ViewName}>
                    <Text style={styles.title}> Album ID : </Text>
                    <Text>{item.albumId}</Text>
                </View>

                <View style={styles.ViewName}>
                    <Text style={styles.title}>Title : </Text>
                    <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                </View>
                <Text style={styles.title}> Image: </Text>
                <Image style={styles.image} source={{ uri: item.thumbnailUrl }} />

                <Text
                    onPress={() => Linking.openURL(item.url)}
                    style={{ color: 'blue', marginBottom: 5, alignSelf: 'flex-end', marginTop: 4 }}
                >Read More...</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 200,
        borderRadius: 4,
        alignSelf: 'center'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'space-between'
    },
    viewStyle: {
        flex: 1,
        display: 'flex',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
    },
    ViewName: {
        flexDirection: 'row',
        padding: 5,
        marginLeft: 5
    },
});
export default DataList;