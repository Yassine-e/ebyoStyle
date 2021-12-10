import React from 'react';
import { StyleSheet, Pressable,Text,TextInput, View,ScrollView,Image,TouchableOpacity,Alert,TouchableWithoutFeedback,Keyboard,useWindowDimensions } from 'react-native';
import { Appbar,Card,Title, Paragraph,Avatar, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function Profil() {

  function _onPressButton() {
    alert('You tapped the button!')
  }

  return(
    <View style={styles.Container}>
      <Image style={styles.bgImage} source={require('../../assets/bgProfil.jpeg')}/>
      <View style={styles.bottomContainer}>
        <Image style={styles.profil} source={require('../../assets/image_pro.jpg')}/>
        <ScrollView>
        <Text style={styles.name}>Achari Yassine</Text>
        <Text style={{color:'grey',bottom:'7%'}}>Tétouan,Maroc</Text>
        <TouchableOpacity >
        <View style={styles.item}  >
          <AntDesign style={styles.itemImg} name="message1" size={20} color="black"/>
          <Text style={styles.itemTxt}>Messages</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity >
        <View style={styles.item} >
          <AntDesign style={styles.itemImg} name="hearto" size={20} color="black" />
          <Text style={styles.itemTxt}>Favourites</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.item} >
          <Ionicons style={styles.itemImg} name="location-outline" size={22} color="black" />
          <Text style={styles.itemTxt}>Location</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item} >
            <Ionicons style={styles.itemImg} name="settings-outline" size={20} color="black" />
            <Text style={styles.itemTxt}>Settings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.logOut}  >
          <AntDesign style={styles.itemImg} name="logout" size={20} color="black" />
          <Text style={styles.itemTxt}>Log out</Text>
        </View>
        </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bgImage:{
    flex: 1,position:'absolute',height:'100%',width:'100%',bottom:80,
  },
  bottomContainer:{
    marginTop:"55%",height:"70%",width:'100%',backgroundColor:'white',borderTopStartRadius:50,
    borderTopEndRadius:50,alignItems:'center'
  },
  profil:{
    height:120,width:120,borderRadius:60,bottom:"10%",
  },
  name: {
    fontSize:25,fontWeight:"bold",bottom:"8%",marginTop:20,
  },
  item:{
    bottom:'4%',flexDirection: "row",paddingBottom:15,alignSelf: 'flex-start',paddingTop:15
  },
  logOut:{
    bottom:'0%',flexDirection: "row",paddingBottom:25,alignSelf: 'flex-start',
  },
  itemTxt:{
    color:'black',bottom:'0%',fontSize:16,fontWeight:"bold",flexDirection: "row",
  },
  itemImg:{
    paddingRight:45,
  },
});
