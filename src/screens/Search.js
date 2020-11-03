import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import MiniCard from '../components/MiniCard'
import Constant from 'expo-constants'

export default function SearchScreen() {
    const [value,setValue] = useState("") 
    const [miniCardData,setMiniCard] = useState([])
    const [loading, setLoading] = useState(false)
    const fetchData = () => {
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyDCJLehEfpiNOMlAfUm9Jgznj6onbYfe4I`)
        .then(res=>res.json())
        .then(data=>{
            setLoading(false)
            console.log(data)
            setMiniCard(data.items)
        })
    }
    return (
        <View style={{
            flex:1,
            marginTop:Constant.statusBarHeight,
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
                }}
                    value={value} 
                    onChangeText={(text)=>setValue(text)}
                />
                <MaterialCommunityIcons 
                    name="send-circle" 
                    size={32}
                    onPress={()=>fetchData()}
                />
            </View>
            {loading ? <ActivityIndicator style={{
                marginTop:120
            }} size="large" color="blue" /> : null}                   
            <FlatList
                data={miniCardData}
                renderItem={({item})=>{
                return<MiniCard 
                    videoId={item.id.videoId}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                    />    
            }}
            keyExtractor={item=>item.id.videoId}
            />
        </View>
    );
}