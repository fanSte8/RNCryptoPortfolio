import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PortfolioScreen, { portfolioOptions } from '../screens/ProtfolioScreen';
import TradingScreen, { tradingOptions } from '../screens/TradingScreen';
import UserScreen, { userOptions } from '../screens/UserScreen';
import CogIcon from '../icons/CogIcon';
import Colors from '../constants/color';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={{ 
      headerRight: () => <CogIcon style={{ marginRight: 10 }} width={25} height={25} />,
      tabBarActiveTintColor: Colors.iconColor
    }}>
      <Tab.Screen name="Portfolio" component={PortfolioScreen} options={portfolioOptions} />
      <Tab.Screen name="Trading" component={TradingScreen} options={tradingOptions} />
      <Tab.Screen name="User" component={UserScreen} options={userOptions} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;