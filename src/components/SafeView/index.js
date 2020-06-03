import React from 'react'
import { View, StatusBar, SafeAreaView } from 'react-native'

import { urlToStatusBarColor } from '~/constants/webview'

import style from './style'

const { backgroundColor, barStyle } = urlToStatusBarColor.default
const { container, safearea } = style

const SafeView = ({ children }) => {
  return (
    <SafeAreaView style={[safearea, { backgroundColor }]}>
      <View style={container}>
        <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} />
        {children}
      </View>
    </SafeAreaView>
  )
}

export default SafeView
