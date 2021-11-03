import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

const CustomizableButton = ({ style, children, onPress }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <View>
        {children}
      </View>
    </TouchableOpacity>
  )
}

export default CustomizableButton;