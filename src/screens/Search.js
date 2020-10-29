import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function SearchScreen() {
    const [value,setValue] = useState("")  
    return (
        <View style={{
            flex:1,
        }}>
            <View style={{
                padding:5,
                flexDirection:"row",
                justifyContent:"space-around",
                elevation:5,
                backgroundColor:"white"
            }}>
                <Ionicons name="md-arrow-back" size={32} />
                <TextInput style={{
                    width:"75%",
                    backgroundColor:"#e2e2e2",
                    // height:39
                }}
                    value={value} 
                    onChangeText={(text)=>setValue(text)}
                />
                <MaterialCommunityIcons name="send-circle" size={32}  />
            </View>
        
        </View>
    );
}