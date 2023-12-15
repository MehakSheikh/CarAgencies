import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, Button, Pressable, Icon, TextInput, TouchableOpacity  } from 'react-native';
import Constants from 'expo-constants';
import { Component } from 'react';
import { Input } from 'react-native-elements';
// You can import from local files
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
let apiKey = 'AIzaSyABjlM22DeejLkYM46E6L6hFd6J-2EA08c'; //API key for location

import * as Location from 'expo-location';

export default class SearchRentalAgencies extends Component {
  
    constructor(props) {
        super(props);
        this.state = { // default values
            latitude: 52.5443407,
            longitude:-1.8654183,
            radius: 5000,
        }
   }
   
   getLocation()  {
    (async () => {
      let { status } = await Location.requestBackgroundPermissionsAsync();  //taking location permission
      if (status !== 'granted') {
           console.log('Permission to access location was denied');
       // setErrorMsg('Permission to access location was denied');
      }
 
      Location.setGoogleApiKey(apiKey); //setting google API key for location

      console.log(status)

      let { coords } = await Location.getCurrentPositionAsync();

      console.log(coords);
      this.state.longitude= coords.longitude
      this.state.latitude= coords.latitude
   
    })();
  }

  render() {
  return (
    <View style={styles.container}>

      <Card>
       <Image style={styles.header} source={require('./assets/pic.jpg')} />
      </Card>
      
      <Text style={styles.paragraph}>
       Hello Mehak
      </Text>
      
       <Text style={styles.textstyle}>
        Enter radius to find the nearby Car Rental Agencies
      </Text>

     <TextInput
        style={styles.txtinput}
        maxLength= "4"
        placeholder="Radius"
        keyboardType="numeric"
        onChangeText={(text) => this.setState({radius: text, error: '' })}
      />

    <TouchableOpacity style={styles.btnstyle}
     onPress={() =>{
      this.getLocation()
       console.log('onPress of getlocation')
     }
     }>
      <Text style={styles.btntext}>Get Location</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnstyle}
     onPress={() =>{
          this.props.navigation.navigate('NearbyShowrooms' , {
                radius: this.state.radius,
                lat: this.state.latitude,
                lng: this.state.longitude
              })
              }
              }>
      <Text style={styles.btntext}>Nearby Agencies</Text>
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
   textstyle: {
    fontSize: 12,
    marginStart: 19,
  },
    txtinput: {
    height: 40,
    marginStart: 19,
    marginEnd: 19,
    marginTop: 10,
    marginBottom: 36,
    borderWidth: 1,
    padding: 10,
  },
    header: {
    height: 150,
    width: 500,
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
});

