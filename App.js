import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, Pressable, Icon, TextInput, TouchableOpacity  } from 'react-native';
import Constants from 'expo-constants';
import { Component } from 'react';
import Home from './components/src/Home'
import StartApp from './components/src/StartApp'
// You can import from local files
import { NavigationContainer } from '@react-navigation/native';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <StartApp></StartApp>
  );

}



