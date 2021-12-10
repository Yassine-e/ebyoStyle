import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TextInput, View,ScrollView,Image,TouchableOpacity,Alert,TouchableWithoutFeedback,Keyboard,useWindowDimensions } from 'react-native';
import { Appbar,Card,Title, Paragraph,Avatar, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { TabView, SceneMap } from 'react-native-tab-view';
import TabBottom from './components/tabBottom';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AjoutService from './components/proprietaire/ajoutService';

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={TabBottom} />
        <Stack.Screen name="AjoutService" component={AjoutService} />
      </Stack.Navigator>
    </NavigationContainer>
    /*<NavigationContainer>
      <TabBottom/>
    </NavigationContainer>*/

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
