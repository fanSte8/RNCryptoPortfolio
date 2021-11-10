import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import useSWR from 'swr';
import tw from 'tailwind-react-native-classnames';
import { FlatList } from 'react-native-gesture-handler';

import CryptoCurrencyItem from './CryptoCurrencyItem';
import { TOP_FOUR_COINS_EUR } from '../constants';
import portfolioData from '../data/data'; 

const CryptoCurrenciesList = () => {
  const { data } = useSWR(TOP_FOUR_COINS_EUR);
  return (
    <View style={tw`p-2 w-11/12`}>
      <View style={tw`flex-row justify-between w-full`}>
        <Text style={tw`font-bold text-gray-400`}>Charts</Text>
        <TouchableOpacity>
          <Text style={tw`font-bold text-red-400`} >See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={data}
        keyExtractor={item => item.symbol}
        renderItem={ ({ item, index }) => (
          <CryptoCurrencyItem 
            name={item.name} 
            symbol={item.symbol} 
            price={item.current_price} 
            amount={portfolioData.cryptoCurrencies[index]}
            imageSource={{ uri: item.image }} 
          /> 
        )}
      />
    </View>
  );
};

export default CryptoCurrenciesList;