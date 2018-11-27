import { createBottomTabNavigator } from 'react-navigation'
import { HomeStack } from '../navigation/links/HomeStack'
import { StocksStack } from './links/StocksStack'
import { NewsStack } from './links/NewsStack'
import { ProfileStack } from '../navigation/links/ProfileStack'

export default createBottomTabNavigator({
  HomeStack,
  StocksStack,
  NewsStack,
  ProfileStack
})
