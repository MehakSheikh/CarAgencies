import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, Pressable, TouchableOpacity  } from 'react-native';
import Constants from 'expo-constants';
import { Component } from 'react';
// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import { NavigationContainer } from 'react-native';

export default class Home extends Component {
   constructor(props) {
        super(props);
   }

  render() {
  return (
    <View style={styles.container}>
  
      <Card >
         <Image style={styles.header} source={require('./assets/pic.jpg')} />

      </Card>

    <Text style={styles.paragraph}>
       Hello Mehak
      </Text>

    <TouchableOpacity style={styles.btnstyle}
     onPress={() =>{ 
     this.props.navigation.navigate('SearchRentalAgencies')}}>
      <Text style={styles.btntext}>Find Agencies</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnstyle}
     onPress={() =>{ 
     this.props.navigation.navigate('FavoriteScreen')}}>
      <Text style={styles.btntext}>Favorite</Text>
    </TouchableOpacity>
    
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
   btnstyle: {
    marginStart: '10%',
    marginEnd: '10%',
    marginBottom: '4%',
    textAlign: 'center',
    backgroundColor: '#841584',
    borderRadius: 4,
    width: 320,
    height: 40,
  },
   btntext: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    padding: 10,
  },
  header: {
    height: 150,
    width: 500,
  }
});

