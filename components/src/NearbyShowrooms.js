import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, Pressable, Icon, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { Component } from 'react';
import ListItem from './AgencyItem';
import Spinner from 'react-native-loading-spinner-overlay';

export default class NearbyShowrooms extends Component {

constructor(props) {
        super(props);
        this.state = {
            rentalAgenciesList: [],
            Loading: true,
            isError: false,
            radius:this.props.route.params.radius,
            lat:this.props.route.params.lat,
            lng:this.props.route.params.lng,
        
        }
        this.fetchData()
       // this.checkFavFunction()
   }

  fetchData() {
    const uri='https://api.tomtom.com/search/2/nearbySearch/.json?key=Erd0PpDZTZIBiJvITGIx2u8zmPWZbTVe&categorySet=7312&lat=' 
    + this.state.lat + '&lon=' +this.state.lng+ '&radius='+this.state.radius
      console.log(uri)
    
    fetch(uri,{
       method:'GET',
       headers:{
         'Content-Type': 'application/json'       },
     })
    .then((response) =>  response.json())
    .then(async(data) => {
      console.log(data)
       this.setState({Loading:false});
       this.setState({rentalAgenciesList: data});
    })
    .catch((error) => {
       this.setState({Loading:false});
       this.setState({isError:true});
        console.log(error);
        alert('Due to some error, API is not responding')
    });
  }

  render() {
     const navigation = this.props.navigation;
  
  if (this.state.Loading) {
    return <View style={styles.spinnerContainer}>
              <Spinner
                    visible={true}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                  />
            </View>;
  }

  const rentalAgenciesList = this.state.rentalAgenciesList.results;
 
  return (
     <View style={{ flex: 1}}>
          <FlatList            
              data={rentalAgenciesList}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                  <TouchableOpacity
                        onPress = {()=>navigation.navigate('ShowroomScreen', {
                            item: item,
                          })
                          }>     
               <ListItem agency={item} nav={navigation} itemStyle={'normalItemStyle'}/>
                  </TouchableOpacity>)}
              />
      </View>
  );
  }
}

const styles = StyleSheet.create({
    spinnerTextStyle: {
    color: '#FFFFFF'
  },
  
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

});

