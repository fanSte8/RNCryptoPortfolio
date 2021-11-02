import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PortfolioScreen from '../screens/ProtfolioScreen';
import TradingScreen from '../screens/TradingScreen';
import UserScreen from '../screens/UserScreen';

const Tab = createBottomTabNavigator();

const MainNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      <Tab.Screen name="Trading" component={TradingScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default MainNavigator;