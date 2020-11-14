import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign, Octicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import Constant from 'expo-constants'
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
    const navigation=useNavigation()
    const dispatch = useDispatch()
    const {colors} = useTheme()  
    const mycolor=colors.iconColor
    const currentTheme  =useSelector(state=>{
      return state.myDarkMode
    })

  return (
    <View style={{
        marginTop:Constant.statusBarHeight,
        height:45,
        backgroundColor:colors.header,
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
          <AntDesign name="search1" size={32} color={mycolor} 
            onPress={()=>navigation.navigate("search")}/>
            <MaterialCommunityIcons name="theme-light-dark" size={32} color={mycolor} 
              onPress={()=>dispatch({type:"change_theme",payload:!currentTheme})}
            />
      </View>
    </View>
  );
}