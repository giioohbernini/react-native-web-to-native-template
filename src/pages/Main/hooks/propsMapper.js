import { StatusBar } from 'react-native'
import { getUrlToStatusBarColor } from '~/constants/webview'
import URLParse from '~/utils/urlParser'

const propsMapper = ({ currentUrl }) => {
  const { url } = URLParse(currentUrl)
  const currentStatusBarColor = getUrlToStatusBarColor(url)

  StatusBar.setBarStyle(currentStatusBarColor.barStyle)

  return {
    ...currentStatusBarColor,
  }
}

export default propsMapper
