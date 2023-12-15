import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity, Button, Pressable, Icon, TextInput  } from 'react-native';
import Constants from 'expo-constants';
import { Component } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage'

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class ShowroomScreen extends Component {
constructor(props) {
        super(props);
        this.state = {
          favorite:[],
          bookmark:false,
        };
   }

  componentDidMount() {
      this.checkFavorite()
  }

   async addBookmark(id) {
          const data = await AsyncStorage.getItem('favorite');
          var list = await JSON.parse(data) || [];
          const data2 = await list.filter(item => item.id != this.props.route.params.item.id);
          data2.push(this.props.route.params.item)
          await AsyncStorage.setItem('favorite', JSON.stringify(data2));
          this.setState({bookmark:true});
    }

     async checkFavorite() {
        const data1 = await AsyncStorage.getItem('favorite');
        var list = await JSON.parse(data1) || [];
        const data = await list.filter(item => item.id == this.props.route.params.item.id);
        if(data.length!=0)
          this.setState({bookmark:true})
     
    }

  render() {
  return (
    <View style={styles.container}>

     <Card style={{ padding: 12 }}>

      <Text style={styles.heading} >
      {this.props.route.params.item.poi.name}
      </Text>

      <Text style={styles.paragraph}>
     {this.props.route.params.item.address.freeformAddress}
      </Text>

      <Text style={styles.paragraph} >
      {this.props.route.params.item.poi.phone}
      </Text>

      <Text style={styles.paragraph} >
      {this.props.route.params.item.poi.url}
      </Text>

      <View style={styles.iconStyle} >
          <TouchableOpacity onPress={() => {
           this.addBookmark();}}>
           <Ionicons name="heart" size={28} style={{ position: 'absolute', right: 0 }} color={this.state.bookmark?"red":"gray" } />
           </TouchableOpacity>
      </View>
      
      </Card>

    </View>
  );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    margin: 12,
  },
  paragraph: {
    margin: 8,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
   heading: {
    margin: 24,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
 
   iconStyle: {
    flex: 1,
    fontSize: 16,
    paddingBottom: 30,
  },
});

