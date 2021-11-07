import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TradingForm from '../src/components/TradingForm';
import data from '../src/data/data';

test('Should calculate corrent percentages from total balance', async () => {
  const component = render(<TradingForm coinPrice={100} />);
  const tradeValueInput = await component.findByTestId('tradeValue');

  fireEvent.press(await component.findByText('25%'));
  expect(parseFloat(tradeValueInput.props.value)).toBe(data.balance / 4);
  

  fireEvent.press(await component.findByText('50%'));
  expect(parseFloat(tradeValueInput.props.value)).toBe(data.balance / 2);

  fireEvent.press(await component.findByText('100%'));
  expect(parseFloat(tradeValueInput.props.value)).toBe(data.balance);
});