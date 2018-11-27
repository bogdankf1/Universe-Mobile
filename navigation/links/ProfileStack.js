import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import TabBarIcon from '../../components/TabBarIcon'
import ProfileScreen from '../../screens/ProfileScreen'

export const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
})

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-contact`}
    />
  )
}