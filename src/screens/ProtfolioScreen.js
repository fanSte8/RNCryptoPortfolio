import React from 'react';
import { View } from 'react-native';
import tw from 'tailwind-rn';

import BalanceCard from '../components/BalanceCard';
import CryptoCurrenciesList from '../components/CryptoCurrenciesList';
import CurrencyDolarIcon from '../icons/CurrencyDolarIcon';
import ListViewIcon from '../icons/ListViewIcon';
import UserIcon from '../icons/UserIcon';

const PortfolioScreen = () => {
  return (
    <View style={tw('m-2 justify-center items-center')}>
      <BalanceCard />
      <CryptoCurrenciesList />
    </View>
  );
};

export default PortfolioScreen;
