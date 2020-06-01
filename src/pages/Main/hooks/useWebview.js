import R from 'ramda'
import { useState } from 'react'

import splashScreen from 'react-native-splash-screen'
import { Linking } from 'react-native'

import UrlParser from '~/utils/urlParser'
import messageEvents from '~/utils/messageEvents'
import { rootUrl, hostname } from '~/constants/webview'

export default ({ ...props }) => {
  const [webview, setWebview] = useState(false)
  const [URI, setURI] = useState(rootUrl)
  const [canGoBack, setCanGoBack] = useState(false)
  const [currentUrl, setCurrentUrl] = useState('')
  const [customBack, setCustomBack] = useState(false)

  const handleSpinner = status => () => {
    if (!status) {
      splashScreen.hide()
    }
  }

  const handleOnMessage = event => {
    const value = event.nativeEvent.data
    const parsedValue = JSON.parse(value)

    messageEvents({ ...parsedValue, setCurrentUrl, setCanGoBack, ...props })
  }

  const handleRef = webviewValue => {
    setWebview(webviewValue)
  }

  const handleNavigationChange = ({ canGoBack: goBack, url }) => {
    const parsedUrl = UrlParser(url)
    const parsedHostname = R.propOr('', 'hostname', parsedUrl)

    if (!parsedHostname.includes(hostname)) {
      Linking.openURL(url).then(() => {
        webview.stopLoading()
      })
    } else {
      setCanGoBack(goBack)
      setCurrentUrl(url)
    }
  }

  return {
    customBack,
    setCustomBack,
    currentUrl,
    setCurrentUrl,
    webview,
    URI,
    handleNavigationChange,
    handleRef,
    handleOnMessage,
    handleSpinner,
  }
}
