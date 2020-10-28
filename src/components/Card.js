import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function Card(){
    const mycolor="#212121"
    return(
        <View style={{
            marginBottom:10,
            // elevation:4,
            // margin:5,
        }}>
            <Image
                source={{uri:"https://images.unsplash.com/photo-1532436908675-8b2b1e9ca504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}}
                style={{
                    width:"100%",
                    height:200,
                }}
            />
            <View style={{
                flexDirection:"row",
                margin:5
            }}>
                <MaterialIcons name="account-circle" size={40} color={mycolor} />
                <View style={{
                    marginLeft:10
                }}>
                    <Text style={{
                        fontSize:20,
                        width:Dimensions.get("screen").width - 70
                    }}
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    >Apple is good but banana is her fxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxav</Text>
                    <Text>Apple is good but banana is her fav</Text>
                </View>
            </View>
        </View>
    )
}