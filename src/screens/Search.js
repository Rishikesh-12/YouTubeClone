import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import MiniCard from '../components/MiniCard'
import Constant from 'expo-constants'
import {useSelector,useDispatch} from 'react-redux'
import { useTheme } from '@react-navigation/native';

export default function SearchScreen({navigation}) { 
    const {colors} = useTheme()
    const mycolor = colors.iconColor   
    const [value,setValue] = useState("") 
    // const [miniCardData,setMiniCard] = useState([])
    const dispatch = useDispatch()
    const miniCardData = useSelector(state=>{
        return state.cardData
    })
    const [loading, setLoading] = useState(false)
    const fetchData = () => {
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key=AIzaSyDCJLehEfpiNOMlAfUm9Jgznj6onbYfe4I`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data.items)
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
                backgroundColor:colors.headerColor
            }}>
                <Ionicons name="md-arrow-back" 
                    style={{
                        color:mycolor,
                    }}
                    size={32} 
                    onPress={()=>navigation.goBack()}    
                />
                <TextInput style={{
                    width:"75%",
                    backgroundColor:colors.searchboxColor,
                    color:colors.iconColor
                }}
                    value={value} 
                    onChangeText={(text)=>setValue(text)}
                />
                <MaterialCommunityIcons 
                    style={{
                        color:mycolor,
                    }} 
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