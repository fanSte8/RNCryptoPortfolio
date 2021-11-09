import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TradingForm from '../src/components/TradingForm';
import data from '../src/data/data';
import { describe } from 'jest-circus';

const COIN_PRICE = 100;

describe('Trading form tests', () => {
  test('Should calculate corrent percentages from total balance', async () => {
    const form = render(<TradingForm coinPrice={COIN_PRICE} />);
    const tradeValueInput = await form.findByTestId('tradeValue');
  
    fireEvent.press(await form.findByText('25%'));
    expect(parseFloat(tradeValueInput.props.value)).toBe(data.balance / 4);
    
    fireEvent.press(await form.findByText('50%'));
    expect(parseFloat(tradeValueInput.props.value)).toBe(data.balance / 2);
  
    fireEvent.press(await form.findByText('100%'));
    expect(parseFloat(tradeValueInput.props.value)).toBe(data.balance);
  });

  test('Should calculate correct cryptocurrency amount based on trade value and vice versa', async () => {
    const form = render(<TradingForm coinPrice={COIN_PRICE} />);
    const tradeValueInput = await form.findByTestId('tradeValue');
    const purchaseValueInput = await form.findByTestId('purchaseValue');

    fireEvent(tradeValueInput, 'onChangeText', '100');
    expect(purchaseValueInput.props.value).toBe('1');

    fireEvent(purchaseValueInput, 'onChangeText', '2');
    expect(tradeValueInput.props.value).toBe('200');
  });
});