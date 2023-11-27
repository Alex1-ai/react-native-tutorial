import React from 'react';
import { Text, StyleSheet, View} from 'react-native';


const ComponenetsScreen = () =>{
    const name = "Alexander"
    return (
    <View>
        <Text style={styles.textStyle}>
            Learning React Native which is built with javascript
        </Text>
        <Text>My Name is {name} learning react native</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponenetsScreen