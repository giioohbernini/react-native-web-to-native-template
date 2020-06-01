import React from 'react'
import { WebView } from 'react-native-webview'

import { View, SafeAreaView, StatusBar } from 'react-native'
import styles from './styles.js'

import enhancer from './hooks'

const { styleNew, safearea } = styles

const Main = ({
  handleRef,
  handleOnMessage,
  webview,
  URI,
  handleNavigationChange,
  handleSpinner,
  backgroundColor,
  barStyle,
}) => {
  return (
    <SafeAreaView style={[safearea, { backgroundColor }]}>
      <View style={styleNew}>
        <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} />

        <WebView
          source={{ uri: URI }}
          onMessage={handleOnMessage}
          onNavigationStateChange={handleNavigationChange}
          ref={handleRef}
          onLoadStart={handleSpinner(true)}
          onLoad={handleSpinner(false)}
        />
      </View>
    </SafeAreaView>
  )
}

export default enhancer(Main)
