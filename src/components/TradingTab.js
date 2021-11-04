import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import { View, Text, Image } from 'react-native';
import tw from 'tailwind-rn';
import TradingForm from './TradingForm';

const TradingTab = ({ coinData }) => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={tw('m-2 p-2 h-full')}>
      <View style={tw('m-4 flex-row justify-between items-center justify-between')}>
        <View style={tw('flex-row items-center justify-between')}>
          <Image style={tw('h-6 w-6')}
            source={{ uri: coinData.image }} 
          />
          <Text style={tw('font-bold text-xl ml-2')}>{coinData.symbol.toUpperCase()}</Text>
          <Text style={tw('text-lg ml-2 text-gray-400')}>{coinData.name}</Text>
        </View>
        <Text style={tw('font-bold text-xl')}>{`€ ${coinData.current_price}`}</Text>
      </View>
      <Tab.Navigator style={tw('flex-1')}>
        <Tab.Screen name="Buy">
          {() => <TradingForm coinPrice={coinData.current_price} />}
        </Tab.Screen>
        <Tab.Screen name="Sell">
          {() => <TradingForm coinPrice={coinData.current_price} />}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

export default TradingTab;