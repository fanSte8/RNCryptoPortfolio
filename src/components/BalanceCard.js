import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import useSWR from 'swr';
import tw from 'tailwind-react-native-classnames';

import { TOP_FOUR_COINS_EUR } from '../constants';
import portfolioData from '../data/data'; 
import LinearGradient from 'react-native-linear-gradient';

const BalanceCard = () => {
  const { data } = useSWR(TOP_FOUR_COINS_EUR);

  const totalBalance = data ? portfolioData.balance + data.reduce((prev, current, index) => 
    prev + current.current_price * (portfolioData.cryptoCurrencies[index] || 0), 0) : 0;

  return (
    <LinearGradient 
      colors={[ '#B066FE', '#63E2FF' ]}
      start={{x: 0, y: 1}} end={{x: 1, y: 0}}
      style={tw`p-4 bg-blue-400 rounded-xl w-11/12 h-48 justify-between`}
    >
      <View>
        <Text style={tw`text-white text-3xl`}>{`€ ${totalBalance.toFixed(2)}`}</Text>
        <Text style={tw`text-gray-100`}>Your balance is equivalent to</Text>
      </View>
      <View style={tw`flex-row`}>
        <TouchableOpacity 
          style={tw`m-1 p-1 bg-gray-100 bg-opacity-30 rounded-sm`}
        >
          <Text style={tw`text-white`} >Deposit</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={tw`m-1 p-1 bg-gray-100 bg-opacity-30 rounded-sm`}
        >
          <Text style={tw`text-white`} >Withdraw</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

export default BalanceCard;
