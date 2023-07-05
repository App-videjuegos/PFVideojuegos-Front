import { View, Text } from 'react-native'
import React from 'react'

const DetailInfo = (props) => {
  //  console.log("estoy en detail info1111:", props.propInfo)
  return (
    <View>
      <Text>Screen DetailInfo</Text>
      <Text>Loq recibo por props</Text>
      <Text>{props.propInfo}</Text>
    </View>
  )
}

export default DetailInfo