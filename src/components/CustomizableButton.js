import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

const CustomizableButton = ({ style, textStyle, text, onPress }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <View>
        <Text style={textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CustomizableButton;