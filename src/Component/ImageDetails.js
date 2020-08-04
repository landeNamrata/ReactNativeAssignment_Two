import React from 'react'
import { Text, StyleSheet, View, Image, Linking } from "react-native";

const ImageDetails = ({ item }) => {
    return (
        <View>
        <View style={styles.viewStyle}>
        <View style={styles.ViewName}>
                <Text style={styles.title}> Artist : </Text>
                <Text style={{fontSize:20,marginBottom:4}}>{item.artist}</Text>
            </View>
            <View style={styles.ViewName}>
                <Text style={styles.title}> Title : </Text>
                <Text style={{fontSize:20,marginBottom:4}}>{item.title}</Text>
            </View>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text
                onPress={() => Linking.openURL(item.url)}
                style={{ color: 'blue', marginBottom: 5, alignSelf: 'flex-end', marginTop: 5 }}
            >More Album Details...</Text>
            <Image style={styles.images} source={{ uri: item.thumbnail_image }} />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: 290,
        borderRadius: 4,
        alignSelf: 'center',
    },
    images: {
        height: 50,
        width: 50,
        borderRadius: 4,
        alignSelf: 'flex-end',
        marginRight:2
        },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'space-between',
        marginLeft:4
    },
    viewStyle: {
        flex: 1,
        display: 'flex',
    },
    ViewName: {
        flexDirection: 'row',
        },
});

export default ImageDetails;
