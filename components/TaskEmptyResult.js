import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import empty from '../assets/icon.png';


export function TaskEmptyResult() {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>empty</Text> 
    </View>
  );
}
