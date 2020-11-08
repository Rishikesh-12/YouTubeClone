import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import MiniCard from '../components/MiniCard'
import Constant from 'expo-constants'
import {useSelector,useDispatch} from 'react-redux'

export default function SearchScreen({navigation}) {
    const [value,setValue] = useState("") 
    // const [miniCardData,setMiniCard] = useState([])
    const dispatch = useDispatch()
    const miniCardData = useSelector(state=>{
        return state
    })
    const [loading, setLoading] = useState(false)
    const fetchData = () => {
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key=AIzaSyDCJLehEfpiNOMlAfUm9Jgznj6onbYfe4I`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.items)
            setLoading(false)
            dispatch({type:"add",payload:data.items})
            // setMiniCard(data.items)
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
                <Ionicons name="md-arrow-back" size={32} 
                    onPress={()=>navigation.goBack()}    
                />
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