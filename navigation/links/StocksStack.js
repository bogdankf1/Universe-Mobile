import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import TabBarIcon from '../../components/TabBarIcon'
import StocksScreen from '../../screens/StocksScreen'

export const StocksStack = createStackNavigator({
  Stocks: StocksScreen
})

StocksStack.navigationOptions = {
  tabBarLabel: 'Stocks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-stats`}
    />
  )
}