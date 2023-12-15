import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, Pressable, Icon, TextInput, TouchableOpacity, FlatList ,SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Constants from 'expo-constants';
import { Component } from 'react';
// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage'

export default class FavouriteScreen extends Component {
   constructor(props) {
        super(props);
        this.state = {
              favorite:[],
          };
   }

    async loadData() {
        const data = await AsyncStorage.getItem('favorite');
        var list = await JSON.parse(data) || [];
        this.setState({favorite:list});
        }

  componentDidMount() {
     this.loadData()
  }

  async remove(id) {
          const data = await AsyncStorage.getItem('favorite');
          var list = await JSON.parse(data) || [];
          var list2 = list.filter(item => item.id != id);
          await AsyncStorage.setItem('favorite',JSON.stringify(list2));
          this.loadData()
    }

  render() {

  const navigation = this.props.navigation;
  
  const rentalAgenciesList =this.state.favorite;
 
  return (
      <View style={{ flex: 1}}>
          
            <FlatList
                data={this.state.favorite}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress = {()=>navigation.navigate('ShowroomScreen', {
                            item: item,
                          })
                          }>
                          
                    <SafeAreaView>
                       <View style={styles.container}>
                        <Card  style={{ padding: 12 }} >
                          <View >
                            <View>
                               <Text style={styles.title} >
                                 {item.poi.name}
                                </Text>

                              <Text style={styles.detail}>
                              {item.address.freeformAddress}
                                </Text>

                              <View style = {styles.iconStyle}>

                                <TouchableOpacity onPress={() => {this.remove(item.id);}}>
                                  <Ionicons name="trash-outline"  size={24}  style={{ position: 'absolute', right: 0 }} />
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>
                        </Card>
                      </View>
                    </SafeAreaView>
                  </TouchableOpacity>)}/>
            </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    margin: 12,
 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 8
  },
    detail: {
    fontSize: 16,
    paddingBottom: 8
  },
   iconStyle: {
    flex: 1,
    fontSize: 16,
    paddingBottom: 30,
  },
});