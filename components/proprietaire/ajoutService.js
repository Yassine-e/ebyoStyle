import React from 'react';
import { StyleSheet, Text,TextInput, View,ScrollView,Image,TouchableOpacity,Alert,TouchableWithoutFeedback,Keyboard,useWindowDimensions } from 'react-native';
import { Appbar,Card,Title, Paragraph,Avatar, Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function AjoutService({navigation}) {
  return(
    <View>
      <Appbar.Header style={{backgroundColor:'#2ba84a'}}>
        <Appbar.BackAction onPress={()=>navigation.navigate('Home')}  />
        <Appbar.Content title="Ajout Service" subtitle="" />
        <Appbar.Action icon="magnify"  />
        <Appbar.Action icon="dots-vertical"  />
      </Appbar.Header>

      <View style={{height:100,}}>
        <View style={{backgroundColor:'#2ba84a',height:120,borderBottomLeftRadius:85,borderBottomRightRadius:85}}></View>
        <Image style={styles.profil} source={require('../../assets/ebyoStylePng3.png')}/>
      </View>

      <View style={styles.contact}>
        <TextInput style={styles.TextInput} onChangeText={(e)=>SetName(e)} placeholder="Titre du service" />
        <TextInput style={styles.TextInput} onChangeText={(e)=>SetAge(e)} placeholder="Description du Service" />
        <TextInput style={styles.TextInput} keyboardType='numeric' onChangeText={(e)=>SetAge(e)} placeholder="Prix" />
        <TouchableOpacity ><Button style={styles.ajout} color='#2ba84a' ><Ionicons name="add" size={20} color="#2ba84a" /> Ajouter</Button></TouchableOpacity >
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height:'100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  TextInput:{
    borderWidth:1,
    width:'90%',
    height:40,
    marginTop:25,
  },
  bottom:{
    marginBottom:0
  },
  contact:{
    padding:50,
  },
  contactTitle:{
    fontSize:20,marginLeft:15,marginBottom:30,
  },
  contactButton:{
    width:'90%',
  },
  Ajout:{
    backgroundColor:'#2ba84a',margin:10,marginLeft:50,marginRight:50,
  },
  actions:{
    alignSelf: 'flex-end',
  },
  img:{
    borderRadius:20,
  },
  profil:{
    height:80,width:180,position:'absolute',left:105,top:20,
  },
  ajout:{
    backgroundColor:'#ffd690',width:262,marginTop:200,
  }
});
