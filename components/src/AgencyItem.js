import React, {Component} from 'react';
import { Card } from 'react-native-paper';
import {StyleSheet, View, Image, Text, TouchableHighlight, SafeAreaView, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default class AgencyItem extends Component {
  
   constructor(props) {
          super(props);
      }

  componentDidMount() {
      console.log(this.props.agency)
  }

   render() {
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Card >
           <Text style={styles.title}>{this.props.agency.poi.name}</Text>
              <Text style={styles.subTitle}>{this.props.agency.address.freeformAddress}</Text>
      
          </Card>
        </View>
      </SafeAreaView>
      )
   }
}

const styles = StyleSheet.create({
 
  container: {
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:2,
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingStart: 10,
    paddingEnd: 10,
    paddingTop: 10,
    paddingBottom: 5,
  },
    subTitle: {
    fontSize: 12,
    textAlign: 'left',
    paddingStart: 10,
    paddingEnd: 10,
    paddingBottom: 10,
  },
});