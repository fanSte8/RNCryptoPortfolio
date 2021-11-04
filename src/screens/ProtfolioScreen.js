import React from 'react';
import { View } from 'react-native';
import tw from 'tailwind-rn';

import BalanceCard from '../components/BalanceCard';
import CryptoCurrenciesList from '../components/CryptoCurrenciesList';

const PortfolioScreen = () => {
  return (
    <View style={tw('m-2 justify-center items-center')}>
      <BalanceCard />
      <CryptoCurrenciesList />
    </View>
  );
};

export default PortfolioScreen;
