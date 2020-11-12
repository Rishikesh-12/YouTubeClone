import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {NavigationContainer, DefaultTheme,DarkTheme,useTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Constant from 'expo-constants'
import { MaterialIcons } from '@expo/vector-icons';

import Home from './src/screens/Home'
import Search from './src/screens/Search'
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';
import { reducer } from './src/reducers/reducer';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import { createPortal } from 'react-dom';

const customDarkTheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:"#201F1F",
    iconColor:"white",
    tabIcon:"white",
    searchboxColor:"black",
  }
}
const customDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:"white",
    iconColor:"black",
    tabIcon:"red",
    searchboxColor:"#ECEBEB"
  }
}

const store = createStore(reducer)
const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome = () => {
  const {colors} = useTheme()
  return(
    <Tabs.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = 'home';
          } else if (route.name === 'explore') {
            iconName = 'explore';
          }  else if (route.name === 'subscribe'){
            iconName = 'subscriptions';
          }

          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.tabIcon,
        inactiveTintColor: 'grey',
      }}> 
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="explore" component={Explore} />
      <Tabs.Screen name="subscribe" component={Subscribe} />
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={customDarkTheme}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rootHome" component={RootHome}/>
          <Stack.Screen name="search" component={Search}/>
          <Stack.Screen name="videoplayer" component={VideoPlayer}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}