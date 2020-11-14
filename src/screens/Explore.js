import React from 'react';
import { StyleSheet, Text, TextInput, View, FlatList,ScrollView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import{useSelector} from 'react-redux'


const LittleCard = ({name}) => {
    return(
        <View style={{
            backgroundColor:"red",
            borderRadius:4,
            width:180,
            height:50,
            marginTop:10,
        }}>
            <Text style={{
                textAlign:"center",
                fontSize:22,
                color:"white",
                marginTop:5,
            }}
            >{name}</Text>
        </View>
    )
}

export default function Explore(){
    const CardData = useSelector(state =>{
        return state.cardData;
    })
    return(
        <View style={{
            flex:1,
        }}>
            <Header />
            <ScrollView>
                <View style={{
                    flexDirection:"row",
                    flexWrap:"wrap",
                    justifyContent:"space-around",
                }}>
                    <LittleCard name="Gaming"/>
                    <LittleCard name="Trending"/>
                    <LittleCard name="Music"/>
                    <LittleCard name="News"/>
                    <LittleCard name="Technology"/>
                    <LittleCard name="Movies"/>
                </View>
                <Text style={{
                    margin:8,
                    fontSize:22,
                    borderBottomWidth:2
                }}>Trending Videos</Text>

                <FlatList 
                    data={CardData}
                    renderItem={({item})=>{
                    return <Card 
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                    />
                    }}
                    keyExtractor={item=>item.id.videoId}
                />
            </ScrollView>
        </View>
    )
}