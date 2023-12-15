import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Location from 'expo-location'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import Home from './Home';
import FavoriteScreen from './FavoriteScreen';
import NearbyShowrooms from './NearbyShowrooms';
import SearchRentalAgencies from './SearchRentalAgencies';
import ShowroomScreen from './ShowroomScreen';

const Stack = createStackNavigator();

 export default class StartApp extends Component {
    render() {
        let { username, actions } = this.props;
        Location.installWebGeolocationPolyfill()     
        return(
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ title: ' Home' }} />
                <Stack.Screen name="NearbyShowrooms" component={NearbyShowrooms} options={{ title: 'Nearby Showrooms' }} />
                <Stack.Screen name="AgencyItem" component={NearbyShowrooms} options={{ title: 'AgencyItem' }} />
              
                <Stack.Screen name="SearchRentalAgencies" component={SearchRentalAgencies} options={{ title: 'Search Rental Agenices' }}/>
                <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} options={{ title: 'Favorites' }} />
                <Stack.Screen name="ShowroomScreen" component={ShowroomScreen} options={{ title: 'Showroom Detail' }} />
               
              </Stack.Navigator>
              
            </NavigationContainer>
        );
    }
}

