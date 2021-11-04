import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'tailwind-rn';
import data from '../data/data';
import Colors from '../constants/color';

const TradingForm = ({ coinPrice }) => {
  const [amount, setAmout] = useState(0);
  const [price, setPrice] = useState(0);
  const [fee, setFee] = useState(0);
  const [amountOption, setAmountOption] = useState('');

  console.log(amountOption);

  const handleAmountChange = amount => {
    setAmountOption('');
    setAmout(amount);
    setPrice(amount * coinPrice);
    setFee(amount * coinPrice * 0.002);
  };

  const handlePriceChange = (price, option = '') => {
    setAmountOption(option);
    setPrice(price);
    setAmout(price / coinPrice);
    setFee(price * 0.002);
  };

  return (
    <View style={tw('p-2')}>
      <View style={tw('mt-4')}>
        <Text style={tw('text-gray-400')}>Estimated purchase value</Text>
        <TextInput 
          keyboardType="decimal-pad"
          value={amount.toString()} 
          onChangeText={handleAmountChange}
          style={tw('border-b border-gray-400 text-xl')} 
        />
      </View>
      <View style={tw('mt-4 flex-row items-center')}>
        <View style={tw('flex-1')}>
          <Text style={tw('text-gray-400')}>Trade value</Text>
          <TextInput 
            keyboardType="decimal-pad"
            value={price.toString()} 
            onChangeText={handlePriceChange}
            style={tw('border-b border-gray-400 text-xl')} 
          />
        </View>
        <View style={tw('flex-row')}>
          <TouchableOpacity 
            style={{ ...tw('border p-1 m-1'), borderColor: amountOption === '25%' ? Colors.iconColor : '#ccc'}}
            onPress={() => handlePriceChange(data.balance / 4, '25%')}
          >
            <Text style={{ color: amountOption === '25%' ? Colors.iconColor : '#ccc' }}>25%</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{ ...tw('border p-1 m-1'), borderColor: amountOption === '50%' ? Colors.iconColor : '#ccc'}}
            onPress={() => handlePriceChange(data.balance / 2, '50%')}
          >
            <Text style={{ color: amountOption === '50%' ? Colors.iconColor : '#ccc' }}>50%</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{ ...tw('border p-1 m-1'), borderColor: amountOption === '100%' ? Colors.iconColor : '#ccc'}}
            onPress={() => handlePriceChange(data.balance, '100%')}
          >
            <Text style={{ color: amountOption === '100%' ? Colors.iconColor : '#ccc' }}>100%</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw('mt-4')}>
        <Text style={tw('text-gray-400')}>Trade fee</Text>
        <Text style={tw('text-gray-400 text-xl')}>{`0.20% = ${fee} €`}</Text>
      </View>
    </View>
  );
};

export default TradingForm;
