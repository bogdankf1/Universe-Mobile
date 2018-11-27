import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import TabBarIcon from '../../components/TabBarIcon'
import NewsScreen from '../../screens/NewsScreen'

export const NewsStack = createStackNavigator({
  News: NewsScreen
})

NewsStack.navigationOptions = {
  tabBarLabel: 'News',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-paper`}
    />
  )
}