import React from 'react';
import { ScrollView } from 'react-native';
import tw from 'tailwind-react-native-classnames';

import BalanceCard from '../components/BalanceCard';
import CryptoCurrenciesList from '../components/CryptoCurrenciesList';
import ListViewIcon from '../icons/ListViewIcon';

const PortfolioScreen = () => {
  return (
    <ScrollView contentContainerStyle={tw`m-2 justify-center items-center`}>
      <BalanceCard />
      <CryptoCurrenciesList />
    </ScrollView>
  );
};

export const portfolioOptions = {
  tabBarIcon: ({ color, size }) => <ListViewIcon fill={color} width={size} height={size} />,
  tabBarLabel: () => null 
};

export default PortfolioScreen;
