import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text,TextInput, View,ScrollView,Image,TouchableOpacity } from 'react-native';
import { Appbar,Card,Title, Paragraph,Avatar, Button } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './Home';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab=createMaterialTopTabNavigator();

export default function Services({navigation}) {

  const [Name,SetName]=useState('User');
  const [Age,SetAge]=useState(0);
  const [Cards,SetCards]=useState([
    { title:'Manucure',desc:'Pour de belles mains',color:'#ffb7c3',image:require ('../assets/manicure.jpg'),key:'1' },
    { title:'Pedicure',desc:'Les pieds les plus attrayants',color:'#d3fac7',image:require ('../assets/pedicure.jpeg'),key:'2' },
    { title:'Epilation',desc:'Enlever, temporairement ou définitivement, les poils de la peau humaine, masculine ou féminine. ',color:'#d9f2b4',image:require ('../assets/epilation.jpg'),key:'3' },
    { title:'Soins de corps ',desc:'proposent un massage pour délasser le corps',color:'#b4ebca',image:require ('../assets/soins-corps.jpg'),key:'4' },
    { title:'Soins de visage',desc:"Préserver la propreté du visage, à l'embellir, le raffermir, le tonifier ou le régénérer",color:'#bcf4f5',image:require ('../assets/soin-visage.jpg'),key:'5' },

  ]);

  const CancelService=(id)=>{
    console.log(id);
    SetCards((prevCards)=>{
      return prevCards.filter(cardd=>cardd.key!=id);
    })
  }
  const DefaultServices=()=>{
    SetCards(Cards);
  }

  const _goBack = () => console.log('Went back');
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => {SetCards(Cards);console.log(Cards);}
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

  function AjoutService(){
    console.log('Ajout');
    navigation.navigate('AjoutService');
  }

  return (
    /*<Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>*/

    <View style={styles.container}>

      <View onStartShouldSetResponder={AjoutService} style={{height:60,marginTop:40,flexDirection: "column",}}  >
        <TouchableOpacity >
          <Button style={styles.Ajout} color='#fcfffc' >
          <Ionicons name="add" size={20} color="#fcfffc" /> Ajouter
          </Button>
        </TouchableOpacity>

      </View>
      <ScrollView>

      {/*<Card.Title title="Nos Services Client" subtitle="Consulter notre catalogue" left={LeftContent} />*/}


      {Cards.map(item=>(
          <Card key={item.key} style={{backgroundColor:item.color,}}>

            <Card.Cover style={styles.img} source={item.image} />
            <Card.Content>
              <View style={{flexDirection: "row",justifyContent: 'space-between',width:'100%'}}>
                <View style={{width:'65%'}}>
                  <Title>{item.title}</Title>
                  <Paragraph>{item.desc}</Paragraph>
                </View>
                <View style={{flexDirection: "row",}}>

                  <TouchableOpacity >
                    <Button onPress={(AjoutService)}><MaterialIcons name="edit" size={24} color="#2d3a3a" /></Button>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>CancelService(item.key)} >
                  <Button><MaterialIcons name="delete" size={24} color="#2d3a3a" /></Button>
                  </TouchableOpacity>

                </View>
              </View>

            </Card.Content>
            {/*<Card.Actions style={styles.actions} >
              <TouchableOpacity >
                <Button><MaterialIcons name="edit" size={24} color="#2d3a3a" /></Button>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>CancelService(item.key)} >
              <Button><MaterialIcons name="delete" size={24} color="#2d3a3a" /></Button>
              </TouchableOpacity>
            </Card.Actions>*/}
          </Card>
        )
      )}
    </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ba84a',
    height:'100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  TextInput:{
    borderWidth:1,
    width:'90%',
    height:40,
    marginBottom:10,
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
    backgroundColor:'#2ba84a',margin:0,marginLeft:0,marginRight:0,justifyContent:'flex-end'
  },
  actions:{
    alignSelf: 'flex-end',
  },
  img:{
    borderRadius:20,
  }
});
