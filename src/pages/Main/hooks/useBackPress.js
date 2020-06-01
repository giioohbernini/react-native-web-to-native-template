import { useEffect } from 'react'
import { BackHandler } from 'react-native'

import isAndroid from '~/utils/isAndroid'

import { dashUri, appHome, rootUrl } from '~/constants/webview'

export default ({ webview, currentUrl, customBack }) => {

  const handleBackPress = () => {

    if (customBack) {
      webview.postMessage(customBack)
      return true
    } else if (currentUrl && currentUrl !== appHome && currentUrl !== dashUri && currentUrl !== rootUrl) {
      webview && webview.goBack && webview.goBack()
      return true
    }

    BackHandler.exitApp()
    return false
  }

  useEffect(() => {
    if (isAndroid) {
      BackHandler.addEventListener(
        'hardwareBackPress',
        handleBackPress,
      )

      return () => {
        BackHandler.removeEventListener('hardwareBackPress')
      }
    }
  })

  return {}
}
