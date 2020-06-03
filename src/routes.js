import R from 'ramda'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useNetInfo } from '@react-native-community/netinfo'
import splashScreen from 'react-native-splash-screen'

import Main from '~/pages/Main'
import Offline from '~/pages/Offline'
import Loading from '~/pages/Loading'

const stack = createStackNavigator()

const { Navigator, Screen } = stack

const commonOptions = {
  header: () => null,
}

const Routes = () => {
  const { isConnected, details } = useNetInfo()
  const hasDetails = R.is(Object, details)

  const initialRoute = hasDetails
    ? isConnected
      ? 'webview'
      : 'offline'
    : 'loading'

  if (hasDetails) {
    setTimeout(() => {
      splashScreen.hide()
    }, 50)
  }

  return (
    <NavigationContainer key={`${initialRoute}-routes`}>
      <Navigator initialRouteName={initialRoute}>
        <Screen name="webview" component={Main} options={commonOptions} />
        <Screen name="offline" component={Offline} options={commonOptions} />
        <Screen name="loading" component={Loading} options={commonOptions} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes
