import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'tailwind-rn';

const CryptoCurrencyItem = ({ name, symbol, price, amount, imageSource }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Trading', { symbol });
      }}
    >
      <View style={tw('flex-row items-center pt-4 pb-4 border-b border-gray-300')}>
        <Image style={tw('mr-2 w-10 h-10')} source={imageSource} />
        <View style={tw('flex-1 flex-row justify-between')}>
          <View>
            <Text style={tw('font-bold text-lg')}>{symbol.toUpperCase()}</Text>
            <Text style={tw('font-bold text-gray-400')}>{name}</Text>
          </View>
          <View>
            <Text style={tw('text-right font-bold text-lg')}>{`€ ${price.toFixed(2)}`}</Text>
            <Text style={tw('text-right text-gray-400')}>{`${amount} ${symbol.toUpperCase()}`}</Text>    
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CryptoCurrencyItem;