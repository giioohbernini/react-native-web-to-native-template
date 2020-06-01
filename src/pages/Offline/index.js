import React from 'react'
import { View, Text } from 'react-native'

import useInternetObserver from '~/hooks/useInternetObserver'

import style from './style'
const { container, title, subtitle, desc } = style

const Offline = () => {
  useInternetObserver()
  return (
    <View style={container}>
      <Text style={title}>Que pena!</Text>
      <Text style={subtitle}>
        Parece que você está sem conexão com a internet.
      </Text>
      <Text style={desc}>Tente verificar sua conexão!</Text>
    </View>
  )
}

export default Offline
