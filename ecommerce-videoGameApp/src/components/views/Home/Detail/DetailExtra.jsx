import { View, Text } from 'react-native'
import React from 'react'

const DetailExtra = (props) => {
  // console.log("estoy en Detail Extra:::", props.propExtra)
  return (
    <View>
      <Text>Screen Detail Extra</Text>
      <Text>Loq recibo por props</Text>
      <Text>{props.propExtra.platforms}</Text>
    </View>
  )
}

export default DetailExtra