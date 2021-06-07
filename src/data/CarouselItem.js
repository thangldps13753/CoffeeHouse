import React from 'react'
import { StyleSheet, Text, View,Image,Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');

const Carousel = ({item}) => {
    return (
        <View style={styles.cardView}>
        <Image style={styles.image} source={{uri: item.url}}/>
        <View style={styles.textView}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
    </View>
    )
}

export default Carousel

const styles = StyleSheet.create({
    cardView:{
        flex: 1,
        width: width -20,
        height: 300,
        backgroundColor: 'white',
        margin: 10,
        borderRadius:5,
        elevation:5
    },
    textView:{
        position:'absolute',
        bottom:10,
        margin: 10,
        marginTop:5,
        left:5
    },
    image:{
        width: width -20,
        height: height/5,
        borderRadius:5
    },
    itemTitle:{
        color:'#00716f',
        fontSize: 18,
        shadowColor:'white',
        fontWeight:'bold',
        elevation:5,
        marginTop:20,
        paddingTop:10
        

    },
    itemDescription:{
        marginTop:10,
        color:'black',
        fontSize: 16,
        shadowColor:'#000',
        shadowOffset:{width:0.8,height:0.8},
        shadowOpacity:1,
        shadowRadius:3,
        elevation:5

    }
})
