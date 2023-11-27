import React from 'react'
import {Text, View, StyleSheet} from 'react-native'


const BoxScreen =() =>{
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        alignItems:'flex-start',
        // alignItems: '',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // width: 200


    },
    textOneStyle:{
        // borderWidth: 3,
        width: 80,
        height:80,
        // padding: 14,

        // borderColor: 'red',
        backgroundColor:'pink'
        // marginVertical: 20,
        // marginHorizontal: 20

    },
    textTwoStyle:{
        // borderWidth: 3,
        // alignSelf: 'stretch',
        // flex: 1,
        backgroundColor: 'green',
        width: 80,
        height:80,
        // alignSelf: 'center'
        marginTop: 40,

        // borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20

    },
    textThreeStyle:{
        borderWidth: 3,
        width: 80,
        height:80,
        backgroundColor: 'purple',
        // padding: 14,

        // borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20

    }
})


export default BoxScreen