import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { describe } from 'jest-circus';
import { SWRConfig } from 'swr';

import AppNavigator from '../src/navigation/AppNavigator';

const coinData = [
  {
    symbol: 'btc',
    name: 'Bitcoin',
    image: '',
    current_price: 57652,
  },
  {
    symbol: 'eth',
    name: 'Ethereum',
    image: '',
    current_price: 4101.88,
  },
  {
    symbol: 'bnb',
    name: 'Binance Coin',
    image: '',
    current_price: 551.85,
  },
  {
    symbol: 'usdt',
    name: 'Tether',
    image: '',
    current_price: 0.866537,
  },
];

describe('Navigation tests', () => {
  test('Should navigate to trading screen', async () => {
    const app = render(
      <SWRConfig value={{ fetcher: () => coinData }}>
        <AppNavigator />
      </SWRConfig>
    );

    const toClick = await app.findByTestId('btc');
    fireEvent.press(toClick);
    expect(await app.findAllByText(/buy/i)).toBeTruthy();
  });
});