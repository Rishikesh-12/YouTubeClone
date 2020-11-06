import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from '../components/Header';

export default function Explore(){
    return(
        <View style={{
            flex:1,
        }}>
            <Header />
            <Text>Explore Screen</Text>
        </View>
    )
}