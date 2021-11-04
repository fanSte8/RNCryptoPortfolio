import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import tw from 'tailwind-rn';

const UPDATE_PRICE = 'UPDATE_PRICE';
const UPDATE_AMOUNT = 'UPDATE_AMOUNT';

const TradingForm = ({ coinPrice }) => {
  const [amount, setAmout] = useState(0);
  const [price, setPrice] = useState(0);
  const [fee, setFee] = useState(0);

  const handleAmountChange = amount => {
    setAmout(amount);
    setPrice(amount * coinPrice);
    setFee(amount * coinPrice * 0.002);
  };

  const handlePriceChange = price => {
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
      <View style={tw('mt-4')}>
        <Text style={tw('text-gray-400')}>Trade value</Text>
        <TextInput 
          keyboardType="decimal-pad"
          value={price.toString()} 
          onChangeText={handlePriceChange}
          style={tw('border-b border-gray-400 text-xl')} 
        />
      </View>
      <View style={tw('mt-4')}>
        <Text style={tw('text-gray-400')}>Trade fee</Text>
        <Text style={tw('text-gray-400 text-xl')}>{`0.20% = ${fee} €`}</Text>
      </View>
    </View>
  );
};

export default TradingForm;
