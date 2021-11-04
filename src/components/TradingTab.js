import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import { View, Text, Image } from 'react-native';
import tw from 'tailwind-rn';
import TradingForm from './TradingForm';

const TradingTab = ({ imageSource, symbol, name, currentPrice }) => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={tw('m-2 p-2 h-full')}>
      <View style={tw('m-4 flex-row justify-between items-center justify-between')}>
        <View style={tw('flex-row items-center justify-between')}>
          <Image style={tw('h-6 w-6')}
            source={ imageSource } 
          />
          <Text style={tw('font-bold text-xl ml-2')}>{symbol.toUpperCase()}</Text>
          <Text style={tw('text-lg ml-2 text-gray-400')}>{name}</Text>
        </View>
        <Text style={tw('font-bold text-xl')}>{`€ ${currentPrice}`}</Text>
      </View>
      <Tab.Navigator style={tw('flex-1')}>
        <Tab.Screen name="Buy">
          {() => <TradingForm coinPrice={currentPrice} />}
        </Tab.Screen>
        <Tab.Screen name="Sell">
          {() => <TradingForm coinPrice={currentPrice} />}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

export default TradingTab;