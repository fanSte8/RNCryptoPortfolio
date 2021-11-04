import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import useSWR from 'swr';

import { TOP_FOUR_COINS_EUR } from '../constants';
import TradingTab from '../components/TradingTab';

const TradingScreen = props => {
  const { data } = useSWR(TOP_FOUR_COINS_EUR);
  const Tab = createMaterialTopTabNavigator();

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

export default TradingScreen;
