import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ImageDetail from "../components/ImageDetail"

const ImageScreen = () => {
    return  (
    <ScrollView>
    <View>
        <ImageDetail title="Forest" score={8} imageSource={require("../../assets/forest.jpg")} />
        <ImageDetail title="Beach" score={6} imageSource={require("../../assets/beach.jpg" )}/>
        <ImageDetail title="Mountain" score={9} imageSource={require("../../assets/mountain.jpg")}/>
       
    </View>
    </ScrollView>
    );
}


style = StyleSheet.create({

})

export default ImageScreen