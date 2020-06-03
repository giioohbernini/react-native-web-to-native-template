import React from 'react'
import { View, Text } from 'react-native'

import useInternetObserver from '~/hooks/useInternetObserver'
import SafeView from '~/components/SafeView'

import style from './style'

const { container, title, subtitle, desc } = style

const Offline = () => {
  useInternetObserver()

  return (
    <SafeView>
      <View style={container}>
        <Text style={title}>Ops!</Text>
        <Text style={subtitle}>Você está sem conexão com a internet.</Text>
        <Text style={desc}>Verifique sua conexão!</Text>
      </View>
    </SafeView>
  )
}

export default Offline
