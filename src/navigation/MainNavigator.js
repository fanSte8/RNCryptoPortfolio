import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PortfolioScreen from '../screens/ProtfolioScreen';
import TradingScreen from '../screens/TradingScreen';
import UserScreen from '../screens/UserScreen';
import ListViewIcon from '../icons/ListViewIcon';
import CurrencyDolarIcon from '../icons/CurrencyDolarIcon';
import UserIcon from '../icons/UserIcon';
import CogIcon from '../icons/CogIcon';

const Tab = createBottomTabNavigator();

const MainNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={{ 
      headerRight: () => <CogIcon style={{ marginRight: 10 }} width={25} height={25} /> 
    }}>
      <Tab.Screen name="Portfolio" component={PortfolioScreen} options={{
        tabBarIcon: ({ color, size }) => <ListViewIcon fill={color} width={size} height={size} />,
        tabBarLabel: () => null 
      }} />
      <Tab.Screen name="Trading" component={TradingScreen} options={{
        tabBarIcon: ({ color, size }) => <CurrencyDolarIcon fill={color} width={size} height={size} />,
        tabBarLabel: () => null 
      }} />
      <Tab.Screen name="User" component={UserScreen} options={{
        tabBarIcon: ({ color, size }) => <UserIcon fill={color} width={size} height={size} />,
        tabBarLabel: () => null 
      }} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default MainNavigator;