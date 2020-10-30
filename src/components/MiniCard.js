import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Constant from 'expo-constants'

export default function MiniCard(){
    return(
        <View style={{
            flexDirection:"row",
            margin:10,
            marginBottom:0
        }}>
            <Image
                source={{uri:"https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80"}}
                style={{
                    width:"45%",
                    height:100,
                }}
            />
            <View style={{
                paddingLeft:7,
            }}>
                <Text style={{
                    fontSize:17,
                    width:Dimensions.get("screen").width/2
                }}
                ellipsizeMode="tail"
                numberOfLines={3}
                >her fav was banana but her aunt was forcing apples on her which was not ripe and she wants orgasm</Text>
                <Text style={{
                    fontSize:12
                }}>Rishikesh Mishra</Text>
            </View>
        </View>
    )
}