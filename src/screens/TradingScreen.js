import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import useSWR from 'swr';
import { useNavigation, useRoute } from '@react-navigation/core';

import { TOP_FOUR_COINS_EUR } from '../constants';
import TradingTab from '../components/TradingTab';
import CurrencyDolarIcon from '../icons/CurrencyDolarIcon';

const TradingScreen = props => {
  const { data } = useSWR(TOP_FOUR_COINS_EUR);
  const Tab = createMaterialTopTabNavigator();

  const navigation = useNavigation();
  const route = useRoute();
  const selectedTab = route.params.symbol;

  useEffect(() => {
    if (!selectedTab) {
      return;
    }
    
    navigation.navigate(selectedTab);
  }, [selectedTab]);

  if (!data) {
    return;
  }

  return (
    <Tab.Navigator screenOptions={{tabBarScrollEnabled: true}}>
      { 
        data.map(coinData => (
          <Tab.Screen 
            key={coinData.symbol} 
            name={coinData.symbol} 
            options={{
              title: `${coinData.symbol}➞EUR`
            }}
          >
            {() => (
              <TradingTab 
                imageSource={{ uri: coinData.image }} 
                name={coinData.name}
                symbol={coinData.symbol}
                currentPrice={coinData.current_price}
              />
            )}
          </Tab.Screen>
        )) 
      }
    </Tab.Navigator>
  );
};

export const tradingOptions = {
  tabBarIcon: ({ color, size }) => <CurrencyDolarIcon fill={color} width={size} height={size} />,
  tabBarLabel: () => null 
};

export default TradingScreen;
