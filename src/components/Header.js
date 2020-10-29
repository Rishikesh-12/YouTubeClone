import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign, Octicons, MaterialIcons } from '@expo/vector-icons';
import Constant from 'expo-constants'

export default function Header() {
    const mycolor="#212121"
  return (
    <View style={{
        height:45,
        backgroundcolor:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        elevation:4
    }}>
      <View style={{
          margin:5,
          flexDirection:"row"
      }}>
        <AntDesign style={{   
            marginLeft:5,
        }} name="youtube" size={32} color="red" />
        <Text style={{
            margin:2.5,
            marginLeft:5,
            fontSize:22,
            fontWeight:"bold",
            color:mycolor,
        }}>YouTube</Text>
      </View>
      <View style={{
          flexDirection:"row",
          justifyContent:"space-around",
          width:150,
          margin:5,
      }}>
          <Octicons name="device-camera-video" size={32} color={mycolor} />
          <AntDesign name="search1" size={32} color={mycolor} />
          <MaterialIcons name="account-circle" size={32} color={mycolor} />
      </View>
    </View>
  );
}