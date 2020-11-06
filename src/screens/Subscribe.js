import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from '../components/Header';

export default function Subscribe(){
    return(
        <View style={{
            flex:1,
        }}>
            <Header />
            <Text>Subscribe Screen</Text>
        </View>
    )
}