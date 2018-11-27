import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import TabBarIcon from '../../components/TabBarIcon'
import HomeScreen from '../../screens/HomeScreen'

export const HomeStack = createStackNavigator({
  Home: HomeScreen
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-globe' : 'md-globe'}
    />
  )
}
