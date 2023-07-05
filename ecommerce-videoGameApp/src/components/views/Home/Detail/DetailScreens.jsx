import { View, Text } from 'react-native'
import React from 'react'

const DetailScreens = (props) => {
  // console.log("estoy en Detail Extra:::", props.propCarrousel)
  return (
    <View>
      <Text>Screen Detail Extra</Text>
      <Text>Loq recibo por props</Text>
      <Text>{props.propCarrousel}</Text>
    </View>
  )
}

export default DetailScreens