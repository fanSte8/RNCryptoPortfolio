import React from 'react';
import { View } from 'react-native';
import UserIcon from '../icons/UserIcon';

const UserScreen = props => {
  return (
    <View>
      
    </View>
  );
};

export const userOptions = {
  tabBarIcon: ({ color, size }) => <UserIcon fill={color} width={size} height={size} />,
  tabBarLabel: () => null 
};

export default UserScreen;
