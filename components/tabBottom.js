import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text,TextInput, View,ScrollView,Image,TouchableOpacity,Alert,TouchableWithoutFeedback,Keyboard,useWindowDimensions } from 'react-native';
import { Appbar,Card,Title, Paragraph,Avatar, Button } from 'react-native-paper';
import Home from './Home';
import Profil from './proprietaire/profil';
import Services from './services';

import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab=createBottomTabNavigator();

export default function TabBottom() {

  return(
    <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: { height: 80 } }} tabBarOptions={{showLabel:false,}} >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center',top:2}}>
            <AntDesign name="home" size={28} color={focused?"#248232":"#e3ddd2"} />
            <Text style={{color:focused?"#248232":"#e3ddd2"}}>Home</Text>
          </View>
        )
      }}/>
      <Tab.Screen name="Profile" component={Profil} options={{
        tabBarIcon:({focused})=>(
          <View>
            <Ionicons name="people-outline" size={28  } color={focused?"#248232":"#e3ddd2"}/>
            <Text style={{color:focused?"#248232":"#e3ddd2"}}>Profile</Text>
          </View>
        )
      }}/>
      <Tab.Screen name="Services" component={Services} options={{
        tabBarIcon:({focused})=>(
          <View>
              <Entypo name="list" size={28} color={focused?"#248232":"#e3ddd2"} />
              <Text style={{color:focused?"#248232":"#e3ddd2"}}>Services</Text>
          </View>
        )
      }}/>
      <Tab.Screen name="More" component={Home} options={{
        tabBarIcon:({focused})=>(
          <View>
            <Feather name="more-vertical" size={24} size={32} color={focused?"#248232":"#e3ddd2"} />
            <Text style={{color:focused?"#248232":"#e3ddd2"}}>More</Text>
          </View>
        )
      }}/>
    </Tab.Navigator>

  );
}
