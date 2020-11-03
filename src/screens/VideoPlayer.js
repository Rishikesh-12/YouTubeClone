import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Constant from 'expo-constants'

export default function VideoPlayer(){
    return(
        <View style={{
            flex:1,
            marginTop:Constant.statusBarHeight,
        }}>
            <Text>Video Player Screen</Text>
        </View>
    )
}