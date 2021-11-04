import React from 'react';
import { ScrollView } from 'react-native';
import tw from 'tailwind-rn';

import BalanceCard from '../components/BalanceCard';
import CryptoCurrenciesList from '../components/CryptoCurrenciesList';

const PortfolioScreen = () => {
  return (
    <ScrollView contentContainerStyle={tw('m-2 justify-center items-center')}>
      <BalanceCard />
      <CryptoCurrenciesList />
    </ScrollView>
  );
};

export default PortfolioScreen;
