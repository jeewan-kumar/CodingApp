import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import OnBoarding from './src/screens/onBording/OnBoarding'
const App = () => {
  return (
    <View>
      <OnBoarding/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})